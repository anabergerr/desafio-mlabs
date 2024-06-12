<script setup lang="ts">

import { ref } from 'vue';


const socialLinks = [
  {
    name: 'Instagram',
    icon: 'instagram',
    enabled: true,
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    enabled: true,
  },
  {
    name: 'Youtube',
    icon: 'youtube',
    enabled: false,
  },
  {
    name: 'Pinterest',
    icon: 'pinterest',
    enabled: false,
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    enabled: false,
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    enabled: false,
  },
];

const selectedLink = ref<number | null>(null)
const inputValueData = ref('');
const inputValueHours = ref('');
const router = useRouter();


const selectLink = (index: number) => {
  selectedLink.value = index
}


const agendar = () => {
  alert('Agendamento realizado com sucesso!');
  router.push('/agendamentos');
};

const dateFormat = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';


</script>



<template>
  <div class="principal">
    <main class="container">
      <section class="left-column">
        <div class="card-container-top">
          <card class="card card-social" :spanText="'Redes Sociais'">
            <div>
              <div id="icons">
                <button v-for="(link, index) in socialLinks" :key="link.name" class="link-social"
                  :class="{ active: selectedLink === index }" :disabled="!link.enabled" @click="selectLink(index)"
                  :target="link.enabled ? 'blank' : ''">
                  <font-awesome-icon class="icon-social" :icon="['fab', link.icon]" />
                </button>
              </div>
            </div>
          </card>
          <card class="card card-data" :spanText="'Data de publicação'">
            <div class="data-input">
              <div class="input-group">
                <div class="input-container">
                  <font-awesome-icon class="icon-calendar" :icon="['far', 'calendar']" />
                  <input type="date" v-model="inputValueData" :format="dateFormat" class="input-date" />
                </div>
                <div class="input-container">
                  <font-awesome-icon class="icon-clock" :icon="['far', 'clock']" />
                  <input type="time" v-model="inputValueHours" :format="timeFormat" class="input-time" />
                </div>
              </div>
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
  <footer class="footer">
    <div class="footer-buttons">
      <button class="button cancel-button">Cancelar</button>
      <button class="button draft-button">Salvar Rascunho</button>
      <button :disabled="inputValueHours.trim() === '' || inputValueData.trim() === '' || selectedLink === null"
        class="button schedule-button" @click="agendar">Agendar</button>
    </div>
  </footer>
</template>

<style scoped>
.data-input {
  display: flex;
  justify-content: space-around;
  padding: 10px;

}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-date,
.input-time {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
}

/* Estilo para os icons */
.icon-calendar,
.icon-clock {
  font-size: 1.2rem;
  color: #666;
}


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
  margin-top: 20px;
}

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
  border: 1px solid #ccc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  background-color: transparent;
  cursor: pointer;
}

.link-social.active {
  background-color: orange;
}

.link-social:hover .icon-social {
  color: rgb(180, 117, 0);
}

.link-social.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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

.button {
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

.schedule-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #ccc;
  color: #666;

}


@media (max-width: 768px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
  }

  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .container .left-column,
  .container .right-column {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;

  }


  .container .right-column {
    display: none;
  }

  .container .card-container-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .container .card-social,
  .card-data {
    width: 100%;
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
  }

  .text-aterea-form {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-aterea-form textarea {
    width: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
    cursor: text;
    resize: vertical;
  }

  .card-upload {
    margin-top: 15px;
    position: relative;
  }

  .card-upload .content-upload-image {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #ccc;
    height: 100px;
    background-color: #f0f0f0;
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
    text-align: center;
    cursor: pointer;
  }

  .card-upload .border-upload img,
  .card-upload .border-upload p {
    display: none;
  }

  .card-upload .input-label-file {
    width: 150px;
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
    transition: background-color 0.3s ease;
  }

  .card-upload .input-label-file:hover {
    background-color: #0056b3;
    color: white;
  }

  .waiting-content {
    text-align: center;
    padding: 20px;
  }

  .waiting-content p {
    margin-bottom: 15px;
    text-align: center;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .card-text .waiting-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-text .waiting-content img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-top: 20px;
  }

  .card h3 {
    padding: 15px;
    background-color: #f0f0f0;
    margin: 0;
    font-weight: bold;
  }

  .card .card-content {
    padding: 15px;
  }

  .card .card-footer {
    padding: 15px;
    background-color: #f0f0f0;
    text-align: center;
  }

  .border-upload img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .border-upload p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .input-label-file {
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .input-label-file:hover {
    background-color: #0056b3;
    color: white;
  }

  .footer-buttons {
    justify-content: center;
    margin-top: 20px;
  }

  .button {
    margin: 0 5px;
  }


}
</style>
