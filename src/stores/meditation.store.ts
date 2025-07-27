import { API_ROUTES } from '@/api'
import type { Meditation } from '@/interfaces/meditation.interface'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>([])

  const currentMeditation = ref<Meditation | null>(null)

  function setCurrentMeditation(id: number) {
    currentMeditation.value = meditations.value.find((item) => item.id === id) || null
  }

  async function fetchMeditations() {
    const { data } = await axios.get<{ data: { meditations: Meditation[] } }>(
      API_ROUTES.meditations,
    )

    meditations.value = data.data.meditations
  }

  return { meditations, fetchMeditations, setCurrentMeditation, currentMeditation }
})
