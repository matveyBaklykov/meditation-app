<script setup lang="ts">
import IconExit from '@/icons/IconExit.vue'
import IconLogo from '@/icons/IconLogo.vue'
import IconMeditationPlay from '@/icons/IconMeditationPlay.vue'
import IconStatistics from '@/icons/IconStatistics.vue'
import { useAuthStore } from '@/stores/auth.store'
import { RouterLink, useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

function logout() {
  authStore.clearToken()
  router.push({ path: '/auth' })
}
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <IconLogo />
    </RouterLink>

    <div class="header__nav">
      <RouterLink to="/meditation" class="header__nav-item">
        <IconMeditationPlay />
        <p>Медитация</p>
      </RouterLink>
      <RouterLink to="/statistic" class="header__nav-item">
        <IconStatistics />
        <p>Статистика</p>
      </RouterLink>
      <div class="header__nav-item" @click="logout">
        <IconExit />
        <p>Выход</p>
      </div>
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
  color: var(--color-text);
  text-decoration: none;
}
.header__nav-item:last-child {
  border-right: none;
}

.header__nav-item:hover {
  opacity: 0.8;
}
</style>
