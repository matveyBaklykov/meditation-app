<script setup lang="ts">
import FeelingButton from '@/components/FeelingButton.vue'
import MeditationCards from '@/components/MeditationCards.vue'
import { useProfileStore } from '@/stores/profile.store'
import { useStatsStore } from '@/stores/stats.store'
import { onMounted, ref } from 'vue'

const profileStore = useProfileStore()

const statsStore = useStatsStore()

onMounted(() => {
  profileStore.fetchProfile()
})

const feelings = [
  { type: 'feeling_calm', image: '/Calm-Icon.svg', name: 'Спокойно' },
  {
    type: 'feeling_relax',
    image: '/Relax.svg',
    name: 'Расслаблено',
  },
  {
    type: 'feeling_focus',
    image: '/Focus.svg',
    name: 'Сфокусировано',
  },
  {
    type: 'feeling_anxiety',
    image: '/Anxious.svg',
    name: 'Тревожно',
  },
]

const selectedFeelingType = ref<string | null>(null)

function selectFeeling(type: string) {
  selectedFeelingType.value = type
  statsStore.updateFeeling(type)
}
</script>

<template>
  <main class="main">
    <div class="welcome">
      <img src="/profile-pic.png" alt="profile picture" class="logo" width="130" height="130" />
      <div class="welcome__text">
        <h3 class="welcome__title">
          Добро пожаловать, {{ profileStore.profile?.data.user.username }}
        </h3>
        <p class="welcome__subtitle">Как вы сегодня себя чувствуете?</p>
      </div>
      <div class="buttons">
        <FeelingButton
          :image="feeling.image"
          :name="feeling.name"
          :type="feeling.type"
          v-for="feeling in feelings"
          :key="feeling.type"
          :selected-type="selectedFeelingType"
          @select="selectFeeling"
        />
      </div>
    </div>
    <div class="meditations">
      <MeditationCards />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding-inline: 55px;
  flex-wrap: wrap;
  gap: 40px;
}

.welcome {
  display: flex;
  flex-direction: column;
  gap: 35px;
  flex: 1 1 300px;
}

.buttons {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.meditations {
  flex: 1 1 700px;
}

/* Адаптив: экраны до 768px (планшеты и телефоны) */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    padding-inline: 20px;
    gap: 30px;
  }

  .welcome__title {
    font-size: 24px;
  }

  .welcome__subtitle {
    font-size: 18px;
  }

  .buttons {
    justify-content: center;
  }
}

/* Адаптив: экраны до 480px (мобильные) */
@media (max-width: 480px) {
  .main {
    padding-inline: 15px;
  }

  .feeling-button {
    width: 50px;
    height: 53px;
  }

  .feeling-button__text {
    font-size: 11px;
  }

  .meditation-card {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  .meditation-card__title {
    font-size: 20px;
  }

  .meditation-cards {
    justify-content: center;
  }
}
</style>
