<template>
  <input v-model="data" class="input-string" />
</template>

<script lang="ts" setup>
const data = defineModel<string>()
</script>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-text);
  color: var(--color-text);
  font-size: 24px;
  min-width: 156px;
  background-color: transparent;
}

.input-string::placeholder {
  color: var(--color-inactive);
  font-weight: 400;
  font-size: 18px;
}

.input-string:focus {
  outline: none;
}
</style>
