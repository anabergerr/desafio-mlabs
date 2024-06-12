<template>
  <div class="page-container">
    <main class="content">
      <img src="/assets/img/vetor-posts.png" alt="Imagem Central" class="center-image" />
      <a href="/agendar">
        <button class="schedule-button">Agendar Post</button>
      </a>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  height: calc(100vh - 100px);
}

.center-image {
  width: 300px;
  height: auto;
  margin: 20px 0;
  /* Margem superior e inferior */
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
