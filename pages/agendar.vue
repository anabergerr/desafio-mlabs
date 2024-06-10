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
  <FooterAgendar />
</template>

<style scoped>
.container {
  /* margin: 50px auto; */

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
  margin-top: 20px;
}

/* Garante que a coluna direita cresça para ocupar o espaço restante */
.container .right-column {
  flex-grow: 1;
}

.container .card-container-top {
  width: 100%;
  max-height: 214.33%;
  display: flex;
  justify-content: space-between;
}

.container .card-social,
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
  width: 649px;
}


@media (max-width: 768px) {
  .container {
    /* margin: 50px auto; */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
  }

  .card {
    background-color: white;
    border-radius: 8px;
    /* Adiciona cantos arredondados às cards */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Adiciona uma sombra sutil para destacar as cards */
    overflow: hidden;
    /* Remove qualquer conteúdo que ultrapasse os limites da card */
  }

  .container .left-column,
  .container .right-column {
    width: 100%;
    /* Define a largura das colunas para 100% */
    padding: 20px;
    /* Ajusta o padding das colunas para o mobile */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
    /* Reduz a margem superior entre as colunas */
  }

  /* Garante que a coluna direita cresça para ocupar o espaço restante */
  .container .right-column {
    display: none;
  }

  .container .card-container-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* Alinha os cards verticalmente no mobile */
    gap: 15px;
    /* Adiciona espaço entre os cards */
  }

  .container .card-social,
  .card-data {
    width: 100%;
    /* Define a largura dos cards para 100% */
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
    margin-top: 15px;
    /* Reduz a margem superior do card-post */
  }

  .text-aterea-form {
    padding: 15px;
    /* Ajusta o padding do formulário */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-aterea-form textarea {
    width: 100%;
    border: 1px solid #000;
    /* Cor da borda do textarea */
    border-radius: 4px;
    padding: 10px;
    cursor: text;
    resize: vertical;
    /* Permite redimensionar o textarea apenas verticalmente */
  }

  .card-upload {
    margin-top: 15px;
    /* Reduz a margem superior do card-upload */
    position: relative;
    /* Define a card-upload como um container para posicionamento */
  }

  .card-upload .content-upload-image {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Centraliza o conteúdo horizontalmente */
    border: 1px dashed #ccc;
    /* Cor da borda do upload */
    height: 100px;
    /* Ajusta a altura do container de upload */
    background-color: #f0f0f0;
    /* Adiciona cor de fundo ao container */
  }

  .card-upload .border-upload {
    width: 100%;
    height: 100px;
    border: 1px dashed #ccc;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* Centraliza o conteúdo verticalmente */
    text-align: center;
    cursor: pointer;
  }

  /* Remover o ícone e texto do border-upload */
  .card-upload .border-upload img,
  .card-upload .border-upload p {
    display: none;
  }

  .card-upload .input-label-file {
    width: 150px;
    /* Ajusta a largura do botão */
    height: 40px;
    color: #007bff;
    border: 1px solid #007bff;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: bold;
    background-color: white;
    /* Define a cor de fundo do botão */
    transition: background-color 0.3s ease;
  }

  .card-upload .input-label-file:hover {
    background-color: #0056b3;
    color: white;
  }

  .waiting-content {
    text-align: center;
    padding: 20px;
    /* Adiciona padding para melhor espaçamento */
  }

  .waiting-content p {
    margin-bottom: 15px;
    text-align: center;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* Define a largura da card-text para 100% */
  }

  /* Estilos para a área do card-text no mobile */
  .card-text .waiting-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-text .waiting-content img {
    width: 100%;
    max-width: 300px;
    /* Define uma largura máxima para a imagem */
    height: auto;
    margin-top: 20px;
  }

  /* Estilos para o cabeçalho da card */
  .card h3 {
    padding: 15px;
    background-color: #f0f0f0;
    margin: 0;
    /* Remove a margem padrão do h3 */
    font-weight: bold;
  }

  /* Estilos para o conteúdo da card */
  .card .card-content {
    padding: 15px;
  }

  /* Estilos para o rodapé da card */
  .card .card-footer {
    padding: 15px;
    background-color: #f0f0f0;
    text-align: center;
  }

  /* Estilos para o ícone de upload */
  .border-upload img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  /* Estilos para o texto do ícone de upload */
  .border-upload p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  /* Estilos para o botão de upload */
  .input-label-file {
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    /* Define um raio de borda mais suave */
    transition: background-color 0.3s ease;
    /* Adiciona uma transição suave para o background */
  }

  /* Estilos para o botão de upload ao passar o mouse */
  .input-label-file:hover {
    background-color: #0056b3;
    /* Define a cor de fundo ao passar o mouse */
    color: white;
    /* Define a cor do texto ao passar o mouse */
  }


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