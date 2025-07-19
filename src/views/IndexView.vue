<script setup lang="ts">
import FeelingButton from '@/components/FeelingButton.vue'
import MeditationCards from '@/components/MeditationCards.vue'

const feelings = [
  { name: 'Спокойно', image: '../../public/Calm-Icon.svg' },
  {
    name: 'Расслаблено',
    image: '../../public/Relax.svg',
  },
  {
    name: 'Фокусировано',
    image: '../../public/Focus.svg',
  },
  {
    name: 'Тревожно',
    image: '../../public/Anxious.svg',
  },
]
</script>

<template>
  <main class="main">
    <div class="welcome">
      <img
        src="../../public/profile-pic.png"
        alt="profile picture"
        class="logo"
        width="130"
        height="130"
      />
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
}

.welcome {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.welcome__title {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 30px;
}
.welcome__subtitle {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
}

.buttons {
  display: flex;
  gap: 25px;
}
</style>
