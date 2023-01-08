<script setup lang="ts">
import AppErrorBoundary from "@/components/AppErrorBoundary.vue";
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import useCategories from "@/composables/useCategories";
import addAsyncComponent from "@/utils/addAsyncComponent";

const ViewHeader = addAsyncComponent(() => import("./ViewHeader.vue"));
const WidgetProducts = addAsyncComponent(
  () => import("@/widgets/widget-products/WidgetProducts.vue")
);

const { isLoading, isError } = useCategories();
</script>

<template>
  <app-request-container
    class="container category-view"
    :is-loading="isLoading"
    :is-error="isError"
  >
    <app-error-boundary component-link="@/views/category-view/ViewHeader.vue">
      <view-header class="category-view__header" />
    </app-error-boundary>
    <app-error-boundary
      component-link="@/widgets/widget-products/WidgetProducts.vue"
    >
      <widget-products class="category-view__widget" />
    </app-error-boundary>
  </app-request-container>
</template>

<style scoped>
.category-view__widget {
  margin-top: 20px;
}
</style>
