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
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(agendamento, index) in agendamentosStore.agendamentos" :key="agendamento.id">
          <td>
            <template v-if="agendamento.social_networks && agendamento.social_networks.length">
              <div v-for="network in agendamento.social_networks" :key="network.id" class="social-icon">
                <font-awesome-icon :icon="['fab', network.icon]" />
              </div>
            </template>
            <template v-else>
              <div class="social-icon">Rede social não especificada</div>
            </template>
          </td>
          <td><img :src="agendamento.media" alt="Mídia" /></td>
          <td>{{ agendamento.text }}</td>
          <td>{{ agendamento.publication_date }}</td>
          <td>{{ agendamento.status.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useAgendamentosStore } from '@/store/agendamentos';

const agendamentosStore = useAgendamentosStore();

onMounted(() => {
  agendamentosStore.fetchData();
})


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