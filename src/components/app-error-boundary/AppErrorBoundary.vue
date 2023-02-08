<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";

defineProps({
  componentLink: {
    type: String,
    required: true,
    validator: (value: string) => value.startsWith("@/"),
  },
});

const isError = ref(false);

onErrorCaptured((error) => {
  console.error(error);
  isError.value = true;
  return false;
});
</script>

<template>
  <div v-if="isError" class="container">
    Произошла ошибка в "{{ componentLink }}"
  </div>
  <slot v-else></slot>
</template>
