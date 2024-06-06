<template>
  <Header profilePicture="url-da-imagem-de-perfil.jpg" logo="url-do-logo.png" />
  <main class="content">
    <img src="/assets/img/vetor-posts.png" alt="Imagem Central" class="center-image" />
    <button class="schedule-button">Agendar Post</button>
  </main>
</template>


<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  /* Ajuste a altura conforme a altura do Header */
  text-align: center;
}

.center-image {
  width: 300px;
  /* Ajuste o tamanho conforme necessário */
  height: auto;
  margin-bottom: 20px;
}

.schedule-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #F2994A;
  color: white;
  border: none;
  border-radius: 5px;
}

.schedule-button:hover {
  background-color: #b33c00;
}
</style>