<script setup lang="ts">
defineProps<{ isLoading: boolean; isError: boolean }>();
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="isError">Произошла ошибка...</div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
