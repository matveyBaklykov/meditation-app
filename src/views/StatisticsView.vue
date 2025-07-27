<script setup lang="ts">
import { useStatsStore } from '@/stores/stats.store'
import { onMounted } from 'vue'

const statsStore = useStatsStore()

onMounted(() => {
  statsStore.getStats()
})
</script>

<template>
  <div class="statistics-cards">
    <div class="statistic-card minutes">
      <div class="statistic-number">{{ statsStore.statistics?.data.summary.total_minutes }}</div>
      <div class="statistic-description">Минут медитации</div>
    </div>
    <div class="statistic-card calm">
      <div class="statistic-number">{{ statsStore.statistics?.data.summary.total_calm }}</div>
      <div class="statistic-description">Спокойных дней</div>
    </div>
    <div class="statistic-card relax">
      <div class="statistic-number">{{ statsStore.statistics?.data.summary.total_relax }}</div>
      <div class="statistic-description">Расслабленных дней</div>
    </div>
    <div class="statistic-card focus">
      <div class="statistic-number">{{ statsStore.statistics?.data.summary.total_focus }}</div>
      <div class="statistic-description">Фокусированных дней</div>
    </div>
    <div class="statistic-card anxiety">
      <div class="statistic-number">{{ statsStore.statistics?.data.summary.total_anxiety }}</div>
      <div class="statistic-description">Тревожных дней</div>
    </div>
  </div>
</template>

<style scoped>
.statistics-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  padding-inline: 100px;
  gap: 50px;
}

.statistic-card {
  border-radius: 20px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.statistic-card.minutes {
  background-image: url(/public/minutes.png);
}
.statistic-card.calm {
  background-image: url(/public/calm.png);
}
.statistic-card.relax {
  background-image: url(/public/relaxed.png);
}

.statistic-card.focus {
  background-image: url(/public/focused.png);
}

.statistic-card.anxiety {
  background-image: url(/public/anxiety.png);
}

.statistic-number {
  font-weight: 700;
  font-size: 80px;
  text-align: right;
}

.statistic-description {
  font-weight: 500;
  font-size: 18px;
}
</style>
