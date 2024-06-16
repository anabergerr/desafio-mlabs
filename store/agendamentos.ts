import { defineStore } from 'pinia';

export const useAgendamentosStore = defineStore('agendamentos', {
  state: () => ({
    agendamentos: [] as Array<{
      redeSocial: string;
      imagem: string;
      texto: string;
      data: string;
      linkPreview: string;
      status: string;
    }>,
    newAgendamentos: [],
  }),
  actions: {
    addAgendamento(agendamento: {
      redeSocial: string;
      imagem: string;
      texto: string;
      data: string;
      linkPreview: string;
      status: string;
    }) {
      this.agendamentos.push(agendamento);
    },
    async fetchAgendamentos(path: string) {
      try {
        const response = await fetch(path)
        this.newAgendamentos = await response.json()
        console.log(this.newAgendamentos);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    },
  },
});

