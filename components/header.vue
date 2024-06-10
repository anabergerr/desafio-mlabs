<template>
  <header class="header">
    <div class="logo-container">
      <img src="/assets/img/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="profile-container">
      <img src="/assets/img/avatar.png" alt="Profile Picture" class="profile-pic" />
      <span class="profile-name">Aselmo Carlos</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  /* Espaça os elementos uniformemente */
  align-items: center;
  /* Alinha os elementos verticalmente ao meio */
  background-color: #fff;
  height: 100px;
  /* Ajuste conforme necessário para a altura desejada */
  padding: 0 5px;
  /* Espaçamento horizontal opcional */
}

.logo-container,
.profile-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-name {
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .logo-container {
    opacity: 0;
  }
}
</style>
