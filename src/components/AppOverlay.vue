<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted } from "vue";

const body = document.querySelector<HTMLElement>("body");

if (body) {
  body.style.overflow = "hidden";

  onUnmounted(() => {
    body.removeAttribute("style");
  });
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 201;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(53, 54, 71, 0.8);

  pointer-events: auto;
}
</style>
