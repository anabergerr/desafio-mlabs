<template>
  <Header />
  <main class="container">
    <section class="left-column">
      <div class="card-container">
        <card :spanText="'Rede Social'">
          <div>
            rede social
          </div>
        </card>
        <card :spanText="'Data do post'">
          <div>
            data
          </div>
        </card>
      </div>

      <card :spanText="'Texto do post'">
        <div>
          rede social
        </div>
      </card>


      <card :spanText="'Upload de imagem'">
        <div>
          rede social
        </div>
      </card>



    </section>
    <section class="right-column">
      <card :spanText="'Visualizacao do'">
        <div>
          rede social
        </div>
      </card>
    </section>
  </main>
  <FooterAgendar />
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.left-column,
.right-column {
  flex: 1;
}

.card-container {
  display: flex;
}

.card {
  flex: 1;
}


/* Estilo para telas menores, como smartphones */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .card-container {
    flex-direction: column;
  }

  .card {
    width: 100%;
    /* Ocupa todo o espaço na coluna */
  }
}
</style>
