<template>
  <button class="button-big">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-big {
  border-radius: 10px;
  width: 321px;
  background-color: var(--color-light-green);
  padding-block: 15px;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 500;
  font-size: 25px;
}

.button-big:hover {
  background-color: #a7b7b2;
}
</style>
