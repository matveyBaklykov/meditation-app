import { API_ROUTES, client } from '@/api'
import type { Stats } from '@/interfaces/stats.interface'
import type { SummaryStatistic } from '@/interfaces/summarystats.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatsStore = defineStore('feelings', () => {
  const statistics = ref<SummaryStatistic>()

  async function updateFeeling(type: string, value: number = 1) {
    await client().post<Stats>(API_ROUTES.stats, {
      type,
      value,
    })
  }

  async function getStats() {
    const { data } = await client().get<SummaryStatistic>(API_ROUTES.stats)
    statistics.value = data
  }

  return { updateFeeling, getStats }
})
