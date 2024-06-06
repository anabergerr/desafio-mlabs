<template>
  <header class="header">
    <div class="logo">
      <img src="/assets/img/logo.png" alt="Logo" />
    </div>
    <div class="profile-pic">
      <img src="/assets/img/avatar.png" alt="Profile Picture" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo img {
  height: 50px;
}
</style>
