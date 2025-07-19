<script setup lang="ts">
import IconExit from '@/icons/IconExit.vue'
import IconLogo from '@/icons/IconLogo.vue'
import IconMeditationPlay from '@/icons/IconMeditationPlay.vue'
import IconStatistics from '@/icons/IconStatistics.vue'
</script>

<template>
  <header class="header">
    <IconLogo />
    <div class="header__nav">
      <a class="header__nav-item">
        <IconMeditationPlay />
        <p>Медитация</p>
      </a>
      <a class="header__nav-item">
        <IconStatistics />
        <p>Статистика</p>
      </a>
      <a class="header__nav-item">
        <IconExit />
        <p>Выход</p>
      </a>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav-item {
  padding-inline: 50px;
  cursor: pointer;
  border-right: 3px solid #37585a;
  height: 92px;
  text-align: center;
  align-content: center;
}
.header__nav-item:last-child {
  border-right: none;
}

.header__nav-item:hover {
  opacity: 0.8;
}
</style>
