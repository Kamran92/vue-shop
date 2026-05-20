<script lang="ts" setup>
import AppViewHeader from "@/shared/ui/app-view-header/AppViewHeader.vue";
import AppWidgetsLoader from "@/shared/ui/app-widgets-loader/AppWidgetsLoader.vue";

defineProps<{ widgetSignatures: Array<string> }>();
</script>

<template>
  <app-view-header title="Категории товаров" class="container" />
  <app-widgets-loader :widget-signatures="widgetSignatures" />
</template>
