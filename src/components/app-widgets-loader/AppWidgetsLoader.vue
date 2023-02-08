<script setup lang="ts">
import getWidget from "./utils/getWidget";
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";

defineProps<{ widgetSignatures: Array<string> }>();
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
