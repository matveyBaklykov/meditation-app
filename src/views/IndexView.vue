<script setup lang="ts">
import FeelingButton from '@/components/FeelingButton.vue'
import MeditationCards from '@/components/MeditationCards.vue'

const feelings = [
  { name: 'Спокойно', image: '/Calm-Icon.svg' },
  {
    name: 'Расслаблено',
    image: '/Relax.svg',
  },
  {
    name: 'Фокусировано',
    image: '/Focus.svg',
  },
  {
    name: 'Тревожно',
    image: '/Anxious.svg',
  },
]
</script>

<template>
  <main class="main">
    <div class="welcome">
      <img src="/profile-pic.png" alt="profile picture" class="logo" width="130" height="130" />
      <div class="welcome__text">
        <h3 class="welcome__title">Добро пожаловать, имя!</h3>
        <p class="welcome__subtitle">Как вы сегодня себя чувствуете?</p>
      </div>
      <div class="buttons">
        <FeelingButton
          :image="feeling.image"
          :name="feeling.name"
          v-for="feeling in feelings"
          :key="feeling.name"
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
