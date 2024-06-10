<template>
  <div class="principal">
    <main class="container">
      <section class="left-column">
        <div class="card-container-top">
          <card class="card card-social" :spanText="'Redes Sociais'">
            <div>
              <div id="icons">
                <a class="link-social" v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank">
                  <font-awesome-icon class="icon-social" :icon="['fab', link.icon]" />
                </a>
              </div>
            </div>
          </card>
          <card class="card card-data" :spanText="'Data de publicacao'">
            <div>
              data
            </div>
          </card>
        </div>
        <card class="card card-post" :spanText="'Texto do post'">
          <div>
            <form action="" class="text-aterea-form">
              <textarea id="myTextarea" rows="5" placeholder="Aqui vai o texto descritivo desse post"></textarea>
            </form>
          </div>
        </card>
        <card class="card card-upload" :spanText="'Upload de imagem'">
          <div>
            <div class="content-upload-image">
              <div class="border-upload">
                <img src="/assets/img/mdi_cloud_upload.svg" alt="icone de upload de imagens">
                <p class="text">Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
                <label for="file" class="input-label-file text">
                  <span id="label-span">Pesquisar imagens</span>
                </label>
                <input id="file" type="file" accept=".png, .jpg, .jpeg" />
              </div>
            </div>
          </div>
        </card>
      </section>
      <section class="right-column">
        <card class="card card-text" :spanText="'Visualização do post'">
          <div id="waiting-post" class="waiting-content">
            <p class="text">Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.</p>
            <img src="assets/img/post-preview.svg" alt="vetor ilustrativo de postagem">
          </div>
        </card>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
}

.card {
  background-color: white;
}

.container .left-column,
.container .right-column {
  width: 50%;
  max-width: 671px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

/* Garante que a coluna direita cresça para ocupar o espaço restante */
.container .right-column {
  flex-grow: 1;
}

.card-container-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  /* Adicione espaço entre as seções */
}

.card-social,
.card-data {
  width: 46%;
}

#icons {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.link-social {
  width: 33px;
  height: 33px;
  border: 1px solid black;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-social {
  color: black;
  width: 16px;
}

.card-post {
  margin-top: 35px;
}

.text-aterea-form {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-aterea-form textarea {
  width: 100%;
  border: 1px solid #000;
  /* Cor da borda do textarea */
  border-radius: 4px;
  padding: 15px;
  cursor: text;
}

.card-upload {
  margin-top: 35px;
}

.content-upload-image {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-upload {
  width: 100%;
  height: 178px;
  border: 1px dashed #ccc;
  /* Cor da borda do upload */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#file {
  display: none;
}

.input-label-file {
  width: 181px;
  height: 36px;
  color: #007bff;
  /* Cor do botão de upload */
  border: 1px solid #007bff;
  /* Cor da borda do botão de upload */
  margin-top: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.waiting-content {
  text-align: center;
}

.waiting-content p {
  margin-bottom: 30px;
  text-align: center;
}

/* Remova a largura fixa da card-text */
.card-text {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Permita que ocupe toda a largura */
}
</style>

<script setup>
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://twitter.com/ceceliacreates',
    icon: 'instagram'
  },
  {
    name: 'Linkedin',
    url: 'https://twitter.com/ceceliacreates',
    icon: 'linkedin'
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@ceceliacreates',
    icon: 'youtube'
  },
  {
    name: 'Pinterest',
    url: 'https://twitter.com/ceceliacreates',
    icon: 'pinterest'
  },
  {
    name: 'Twitter',
    url: 'https://www.youtube.com/@ceceliacreates',
    icon: 'twitter'
  },
  {
    name: 'Facebook',
    url: 'https://www.youtube.com/@ceceliacreates',
    icon: 'facebook'
  },
];
</script>