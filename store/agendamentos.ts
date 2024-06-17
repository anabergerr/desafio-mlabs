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
    novosAgendamentos: [] as Agendamento[],
  }),
  actions: {
    addAgendamento(agendamento: Agendamento) {
      this.novosAgendamentos.push(agendamento);
    },

    async fetchData() {
      try {
        const [agendamentosResponse, socialNetworksResponse, statusesResponse] = await Promise.all([
          fetch('/schedules.json'),
          fetch('/social-networks.json'),
          fetch('/schedules-status.json')
        ]);

        const agendamentosData = await agendamentosResponse.json();
        const socialNetworksData = await socialNetworksResponse.json();
        const statusesData = await statusesResponse.json();

        this.socialNetworks = socialNetworksData.data;
        this.statuses = statusesData.data;

        const fetchedAgendamentos = agendamentosData.data.map((agendamento: any) => ({
          id: agendamento.id,
          social_networks: agendamento.social_network_key.map((id: number) =>
            this.socialNetworks.find(sn => sn.id === id) as SocialNetwork
          ),
          media: agendamento.media,
          text: agendamento.text,
          publication_date: agendamento.publication_date,
          status: this.statuses.find(status => status.id === agendamento.status_key) as Status
        }));
        this.agendamentos = [...fetchedAgendamentos, ...this.novosAgendamentos];

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  },
});
