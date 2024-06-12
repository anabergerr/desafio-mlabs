<template>
  <div class="agendamento-container">
    <h2>Listagem de agendamento</h2>
    <table>
      <thead>
        <tr>
          <th>Redes sociais</th>
          <th>Mídia</th>
          <th>Texto</th>
          <th>Data</th>
          <th>Ações</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(agendamento, index) in agendamentos" :key="index">
          <td>
            <div class="social-icon">
              <font-awesome-icon :icon="['fab', agendamento.redeSocial]" />
            </div>
          </td>
          <td><img :src="agendamento.imagem" alt="Mídia"></td>
          <td>{{ agendamento.texto }}</td>
          <td>{{ agendamento.data }}</td>
          <td>
            <a :href="agendamento.linkPreview" class="preview-button">Preview</a>
          </td>
          <td>
            <div :class="getStatusClass(agendamento.status)">
              {{ agendamento.status }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const agendamentos = ref([
  {
    redeSocial: 'instagram',
    imagem: 'https://via.placeholder.com/150',
    texto: 'Aqui vai o texto descritivo desse post',
    data: '09/09/2020 às 14:45h',
    linkPreview: '#',
    status: 'Agendado',
  },
  {
    redeSocial: 'linkedin',
    imagem: 'https://via.placeholder.com/150',
    texto: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    data: '08/09/2020 às 10:30h',
    linkPreview: '#',
    status: 'Postado',
  },
  {
    redeSocial: 'linkedin',
    imagem: 'https://via.placeholder.com/150',
    texto: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    data: '07/09/2020 às 18:15h',
    linkPreview: '#',
    status: 'Postado',
  },
  {
    redeSocial: 'linkedin',
    imagem: 'https://via.placeholder.com/150',
    texto: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    data: '06/09/2020 às 12:05h',
    linkPreview: '#',
    status: 'Postado com ressalvas',
  },
  {
    redeSocial: 'instagram',
    imagem: 'https://via.placeholder.com/150',
    texto: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    data: '05/09/2020 às 15:10h',
    linkPreview: '#',
    status: 'Não aprovado',
  },
]);

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Agendado':
      return 'status-agendado';
    case 'Postado':
      return 'status-postado';
    case 'Postado com ressalvas':
      return 'status-ressalvas';
    case 'Não aprovado':
      return 'status-nao-aprovado';
    default:
      return '';
  }
};
</script>

<style scoped>
.agendamento-container {
  margin-top: 80px;
  padding: 20px;
}

.agendamento-container h2 {
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: #4F4F4F;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f2f2f2;
}

img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.preview-button {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.status-agendado {
  color: #007bff;
  border: 1px solid #007bff;
  padding: 3px 8px;
  border-radius: 5px;
}

.status-postado {
  color: #28a745;
  border: 1px solid #28a745;
  padding: 3px 8px;
  border-radius: 5px;
}

.status-ressalvas {
  color: #ffc107;
  border: 1px solid #ffc107;
  padding: 3px 8px;
  border-radius: 5px;
}

.status-nao-aprovado {
  color: #dc3545;
  border: 1px solid #dc3545;
  padding: 3px 8px;
  border-radius: 5px;
}
</style>