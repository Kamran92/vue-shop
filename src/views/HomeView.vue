<script lang="ts" setup>
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import WidgetCategories from "@/widget/WidgetCategories.vue";
</script>

<template>
  <app-error-boundary component-link="@/widget/ProductCategories.vue">
    <widget-categories />
  </app-error-boundary>
</template>
