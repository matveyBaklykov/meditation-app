<script lang="ts" setup>
import IconPlay from '@/icons/IconPlay.vue'
</script>

<template>
  <button class="button-start">
    <div>Начать</div>
    <IconPlay />
  </button>
</template>

<style scoped>
.button-start {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: var(--color-dark-green);
  color: var(--color-text);
  padding-block: 10px;
  transition: all 0.2s;
}

.button-start:hover {
  background-color: var(--color-light-green);
}
</style>
