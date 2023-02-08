<script setup lang="ts">
import widgets from "./widgets";
import AppErrorBoundary from "@/components/app-error-boundary/AppErrorBoundary.vue";

defineProps<{ widgetSignatures: Array<string> }>();

const getWidget = (signature: string) => {
  const widget = widgets[signature];
  if (widget) return widget;
  throw new Error(`не найден виджет для сигнатуры ${signature}`);
};
</script>

<template>
  <app-error-boundary
    v-for="(signature, index) in widgetSignatures"
    :key="index"
    :component-link="getWidget(signature).widgetLink"
  >
    <component :is="getWidget(signature).component" class="mt-20" />
  </app-error-boundary>
</template>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
