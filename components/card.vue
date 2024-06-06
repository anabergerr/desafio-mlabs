<template>
  <section class="containter-principal" :style="{ height: dynamicHeight }">
    <div class="text-post-container">
      <span for="post-text">{{ spanText }}</span>
    </div>
    <slot></slot>
  </section>

</template>


<script>
export default {
  name: 'card',
  props: {
    spanText: {
      type: String,
      required: true
    },
    computed: {
      dynamicHeight() {
        return 'fit-content';
      }
    }

  }
}
</script>


<style scoped>
.containter-principal {
  border: 1px solid #E0E0E0;
  border-radius: 10px;


}

.text-post-container {
  border-bottom: 1px solid #E0E0E0;
  padding: 10px;
  margin-bottom: 10px;
}

.text-post-container label {
  display: block;
  margin-bottom: 5px;
}
</style>
