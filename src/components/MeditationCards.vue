<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store'
import { onMounted } from 'vue'
import ButtonStart from './ButtonStart.vue'
import { useRouter } from 'vue-router'

const store = useMeditationStore()
const router = useRouter()

function startMeditation(id: number) {
  store.setCurrentMeditation(id)
  router.push('/meditation')
}

onMounted(() => {
  store.fetchMeditations()
})
</script>

<template>
  <div class="meditation-cards">
    <div v-for="item in store.meditations" :key="item.id" class="meditation-card">
      <div class="meditation-card__header">
        <h4 class="meditation-card__title">{{ item.title }}</h4>
        <div class="meditation-card__description">{{ item.description }}</div>
      </div>
      <div class="meditation-card__footer">
        <ButtonStart @click="startMeditation(item.id)" />
        <div class="meditation-card__duration">{{ item.duration_min }} мин</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditation-cards {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  max-width: 700px;
}
.meditation-card {
  border-radius: 20px;
  width: 339px;
  height: 170px;
  background-color: var(--color-fg);
  color: var(--color-text-dark);
  padding: 22px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.meditation-card__title {
  font-family: var(--second-family);
  font-size: 25px;
}
.meditation-card__footer {
  display: flex;
  justify-content: space-between;
}
.meditation-card__duration {
  opacity: 0.75;
}
</style>
