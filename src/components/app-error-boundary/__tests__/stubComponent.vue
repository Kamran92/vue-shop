<script setup lang="ts">
const click = () => {
  throw new Error();
};
</script>
<template>
  <button @click="click"></button>
</template>
