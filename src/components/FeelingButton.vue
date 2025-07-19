<template>
  <div class="moods">
    <button class="feeling-button">
      <img :src="image" :alt="name" class="feeling-button__image" />
    </button>
    <p class="feeling-button__text">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
const { name, image } = defineProps({
  name: String,
  image: String,
})
</script>

<style scoped>
.moods {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.moods:hover {
  opacity: 0.8;
}
.feeling-button {
  border-radius: 20px;
  width: 62px;
  height: 65px;
  border: none;
  cursor: pointer;
}

.feeling-button__text {
  font-size: 12px;
}
</style>
