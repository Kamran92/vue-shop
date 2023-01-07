<script lang="ts" setup>
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import ProductCategories from "@/widget/ProductCategories.vue";
</script>

<template>
  <app-error-boundary component-link="@/widget/ProductCategories.vue">
    <product-categories />
  </app-error-boundary>
</template>
