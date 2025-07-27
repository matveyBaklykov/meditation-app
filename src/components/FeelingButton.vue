<template>
  <div class="moods">
    <button
      class="feeling-button"
      :class="{ active: selectedType === type }"
      @click="choosedFeeling"
    >
      <img :src="image" :alt="name" class="feeling-button__image" />
    </button>
    <p class="feeling-button__text">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
const { name, image, type } = defineProps<{
  name: string
  image: string
  type: string
  selectedType: string | null
}>()

const emit = defineEmits<{
  (e: 'select', type: string): void
}>()

function choosedFeeling() {
  emit('select', type)
}
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

.feeling-button.active {
  background-color: rgb(105, 176, 156);
}
</style>
