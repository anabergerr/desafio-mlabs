<template>
  <footer class="footer">
    <div class="footer-buttons">
      <button class="cancel-button">Cancelar</button>
      <button class="draft-button">Salvar Rascunho</button>
      <button class="schedule-button">Agendar</button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #FFFFFF;
  padding: 20px;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
}

.footer-buttons {
  display: flex;
  justify-content: flex-end;
}

button {
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.cancel-button {
  background-color: transparent;
  color: #333;
}

.draft-button {
  background-color: #fff;
  color: #007bff;
}

.schedule-button {
  background-color: #007bff;
  color: #fff;
  margin-right: 40px;
}

@media (max-width: 768px) {
  .footer-buttons {
    justify-content: center;
    margin-top: 20px;
  }

  button {
    margin: 0 5px;
  }
}
</style>
