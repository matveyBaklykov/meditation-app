<template>
  <div class="moods">
    <button class="feeling-button" @click="choosedFeeling()">
      <img :src="image" :alt="name" class="feeling-button__image" />
    </button>
    <p class="feeling-button__text">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useStatsStore } from '@/stores/stats.store'

const { name, image, type } = defineProps<{
  name: string
  image: string
  type: string
}>()

const statsStore = useStatsStore()

function choosedFeeling() {
  statsStore.updateFeeling(type)
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
</style>
