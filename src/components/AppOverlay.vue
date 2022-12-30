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

<style>
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 201;
  background: rgba(53, 54, 71, 0.8);
  pointer-events: auto;
}
</style>
