<script setup lang="ts">
import ButtonBig from '@/components/ButtonBig.vue'
</script>

<template>
  <div class="auth__welcome">
    <h1 class="auth__title">Добро пожаловать!</h1>
    <div class="auth__descr"><p>Медитируй и оставайся в фокусе, чтобы быть счастливым.</p></div>
  </div>

  <ButtonBig>
    <RouterLink to="auth/login" class="auth__button">Войти в приложение</RouterLink>
  </ButtonBig>
</template>

<style scoped>
.auth__welcome {
  text-align: center;
  margin-bottom: 54px;
}
.auth__title {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 34px;
}
.auth__descr {
  font-weight: 500;
  font-size: 20px;
}

.auth__button {
  color: var(--color-text);
  text-decoration: none;
}
</style>
