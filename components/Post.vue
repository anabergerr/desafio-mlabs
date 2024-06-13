<template>
  <div class="post-container">
    <div class="post-header">
      <div class="post-user">
        <font-awesome-icon class="icon-social" :icon="['fab', iconSocial]" />
        <span class="post-username">{{ username }}</span>
        <span class="post-date">{{ date }}</span>
      </div>
    </div>
    <div class="post-content">
      <p>{{ content }}</p>
      <img src="/assets/img/post.png" alt="Post Image">
    </div>
    <div class="post-footer">
      <div class="post-comments">
        <span>{{ comments }} comentários</span>
      </div>
      <div class="post-actions">
        <font-awesome-icon icon="fa-thumbs-up" />
        <font-awesome-icon icon="fa-comment" />
        <font-awesome-icon icon="fa-share" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


defineProps({
  username: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: {
    type: Number,
    default: 0
  },
  iconSocial: {
    type: String
  }
});
</script>

<style scoped>
.post-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  /* Remover a borda inferior */
  border-bottom: none;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.post-user {
  display: flex;
  align-items: center;
}

.icon-social {
  font-size: 24px;
  color: #0077b5;
  /* Cor do LinkedIn */
  margin-right: 10px;
}

.post-username {
  font-weight: bold;
}

.post-date {
  font-size: 14px;
  color: #888;
  margin-left: 5px;
}

.post-content {
  margin-bottom: 10px;
}

img {
  width: 368px;
  height: auto;
  border-radius: 8px;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Remover a borda superior */
  border-top: none;
}

.post-comments {
  font-size: 14px;
  color: #888;
}

.post-actions {
  display: flex;
  align-items: center;
}

.post-actions i {
  margin-right: 10px;
  color: #888;
}

.post-actions>* {
  margin-right: 2px;
}
</style>