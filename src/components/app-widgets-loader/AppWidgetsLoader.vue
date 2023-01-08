<script setup lang="ts">
import widgetLoader from "./utils/widgetLoader";
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";

defineProps<{ widgets: Array<string> }>();
</script>

<template>
  <app-error-boundary
    v-for="(widget, index) in widgets"
    :key="index"
    :component-link="widgetLoader(widget)!.widgetLink"
  >
    <component :is="widgetLoader(widget)!.component" class="mt-20" />
  </app-error-boundary>
</template>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>
