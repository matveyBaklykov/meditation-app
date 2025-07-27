<template>
  <button class="play-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.play-button {
  display: flex;
  border-radius: 100px;
  border: none;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
}
</style>
