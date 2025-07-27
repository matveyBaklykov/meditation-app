<script setup lang="ts">
import IconMainLogo from '@/icons/IconMainLogo.vue'
</script>

<template>
  <div class="auth">
    <IconMainLogo />
    <RouterView />
  </div>
</template>

<style scoped>
.auth {
  background-image: url('/public/bg-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
