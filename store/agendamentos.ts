import { defineStore } from 'pinia';

interface SocialNetwork {
  id: number;
  name: string;
  icon: string;
  status: string;
}

interface Status {
  id: number;
  name: string;
  color: string;
}

interface Agendamento {
  id: number;
  social_networks: SocialNetwork[];
  media: string;
  text: string;
  publication_date: string;
  status: Status;
}

export const useAgendamentosStore = defineStore('agendamentos', {
  state: () => ({
    agendamentos: [] as Agendamento[],
    socialNetworks: [] as SocialNetwork[],
    statuses: [] as Status[],
  }),
  actions: {
    addAgendamento(agendamento: Agendamento) {
      this.agendamentos.push(agendamento);
      this.saveAgendamento(agendamento);
    },

    saveAgendamento(agendamento: Agendamento) {
      let agendamentos: Agendamento[] = JSON.parse(localStorage.getItem('agendamentos') || '[]');
      agendamentos.push(agendamento);
      localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    },

    loadAgendamentos() {
      const storedAgendamentos = localStorage.getItem('agendamentos');
      if (storedAgendamentos) {
        this.agendamentos = JSON.parse(storedAgendamentos);
      }
    },

    async fetchData() {
      try {
        const [agendamentosResponse, socialNetworksResponse, statusesResponse] = await Promise.all([
          fetch('/schedules.json'),
          fetch('/social-networks.json'),
          fetch('/schedules-status.json')
        ]);

        const agendamentosData: { data: any[] } = await agendamentosResponse.json();
        const socialNetworksData: { data: SocialNetwork[] } = await socialNetworksResponse.json();
        const statusesData: { data: Status[] } = await statusesResponse.json();

        this.socialNetworks = socialNetworksData.data;
        this.statuses = statusesData.data;

        this.loadAgendamentos();

        const fetchedAgendamentos: Agendamento[] = agendamentosData.data.map((agendamentoData: any) => ({
          id: agendamentoData.id,
          social_networks: agendamentoData.social_network_key.map((id: number) =>
            this.socialNetworks.find(sn => sn.id === id) as SocialNetwork
          ),
          media: agendamentoData.media,
          text: agendamentoData.text,
          publication_date: agendamentoData.publication_date,
          status: this.statuses.find(status => status.id === agendamentoData.status_key) as Status
        }));

        const newAgendamentos = fetchedAgendamentos.filter((fetched: Agendamento) =>
          !this.agendamentos.some(existing => existing.id === fetched.id)
        );

        this.agendamentos = [...this.agendamentos, ...newAgendamentos];

        newAgendamentos.forEach(newAgendamento => {
          this.saveAgendamento(newAgendamento);
        });

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        // Tratar o erro de forma apropriada, se necessário
      }
    }
  },
});

