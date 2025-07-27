<script setup lang="ts">
import ButtonIconBig from '@/components/ButtonIconBig.vue'
import ButtonIconSmall from '@/components/ButtonIconSmall.vue'
import IconGoBack from '@/icons/IconGoBack.vue'
import IconPause from '@/icons/IconPause.vue'
import IconRestart from '@/icons/IconRestart.vue'
import IconStart from '@/icons/IconStart.vue'
import { useMeditationStore } from '@/stores/meditation.store'
import { useStatsStore } from '@/stores/stats.store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const meditationStore = useMeditationStore()

const router = useRouter()

const statsStore = useStatsStore()

const duration = ref<number>(0)
const timer = ref<number | null>(null)
const isRunning = ref<boolean>(false)

const currentMeditation = meditationStore.currentMeditation

function start() {
  if (!currentMeditation || isRunning.value) {
    return
  }

  if (duration.value === 0) {
    duration.value = Number(currentMeditation.duration_min) * 60
  }

  isRunning.value = true
  timer.value = setInterval(() => {
    duration.value--
    if (duration.value <= 0) {
      stopAndSave()
    }
  }, 1000)
}

function stopAndSave() {
  clearInterval(timer.value!)
  isRunning.value = false
  const meditatedMinutes = Math.ceil(
    (Number(currentMeditation?.duration_min) * 60 - duration.value) / 60,
  )
  statsStore.updateStats('duration_min', meditatedMinutes)
  router.push('/')
}

function restart() {
  if (timer.value) clearInterval(timer.value)
  const meditatedMinutes = Math.ceil(
    (Number(currentMeditation?.duration_min) * 60 - duration.value) / 60,
  )
  statsStore.updateStats('duration_min', meditatedMinutes)
  start()
}

function pause() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
    isRunning.value = false
  }
}

function goBack() {
  if (timer.value) clearInterval(timer.value)
  const meditatedMinutes = Math.ceil(
    (Number(currentMeditation?.duration_min) * 60 - duration.value) / 60,
  )
  statsStore.updateStats('duration_min', meditatedMinutes)
  router.push('/')
}

function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const sec = (seconds % 60).toString().padStart(2, '0')
  return `${min}:${sec}`
}
</script>

<template>
  <div class="meditation">
    <div class="meditation__timer">
      {{ formatTime(duration) }}
    </div>
    <div class="meditation__name">
      <h3 class="meditation__title">{{ currentMeditation?.title }}</h3>
      <div class="meditation__descr">
        <p>{{ currentMeditation?.description }}</p>
      </div>
    </div>

    <div class="meditation__buttons">
      <ButtonIconSmall @click="goBack">
        <IconGoBack />
      </ButtonIconSmall>
      <ButtonIconBig @click="start" v-if="!isRunning">
        <IconStart />
      </ButtonIconBig>
      <ButtonIconBig v-if="isRunning" @click="pause">
        <IconPause />
      </ButtonIconBig>
      <ButtonIconSmall @click="restart">
        <IconRestart />
      </ButtonIconSmall>
    </div>
  </div>
</template>

<style scoped>
.meditation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;
}

.meditation__timer {
  background-image: url('/public/bg-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 300px;
  width: 250px;
  height: 250px;
  text-align: center;
  font-weight: 400;
  font-size: 44px;
  align-content: center;
}
.meditation__name {
  text-align: center;
}
.meditation__title {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 35px;
}

.meditation__descr {
  font-size: 25px;
  text-align: center;
  opacity: 0.5;
}

.meditation__buttons {
  display: flex;
  gap: 30px;
}
</style>
