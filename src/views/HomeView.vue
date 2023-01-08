<script lang="ts" setup>
import AppWidgetsLoader from "@/components/app-widgets-loader/AppWidgetsLoader.vue";

defineProps<{ widgets: Array<string> }>();
</script>

<template>
  <app-widgets-loader :widgets="widgets" />
</template>
