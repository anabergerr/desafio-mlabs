// store/agendamentos.ts
// stores/agendamentos.ts
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
  },
});

