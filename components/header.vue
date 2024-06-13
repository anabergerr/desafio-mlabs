<template>
  <header class="header">
    <div class="profile-container">
      <img src="/assets/img/avatar.png" alt="Profile Picture" class="profile-pic" />
      <span class="profile-name">Aselmo Carlos</span>
    </div>
    <div class="logo-container">
      <img src="/assets/img/logo.png" alt="Logo" class="logo" />
    </div>
  </header>
</template>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 80px;
  padding: 0 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
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
    display: none;
  }
}
</style>
