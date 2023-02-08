<script setup lang="ts">
defineProps<{ isLoading: boolean; isError: boolean }>();
</script>

<template>
  <div v-if="isLoading">Загрузка...</div>
  <div v-else-if="isError">Произошла ошибка...</div>
  <div v-else>
    <slot></slot>
  </div>
</template>
