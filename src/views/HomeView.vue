<script lang="ts" setup>
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import WidgetCategories from "@/widgets/WidgetCategories.vue";
</script>

<template>
  <app-error-boundary component-link="@/widgets/ProductCategories.vue">
    <widget-categories />
  </app-error-boundary>
</template>
