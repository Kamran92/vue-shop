<script setup lang="ts">
import AppContainer from "@/components/AppContainer.vue";
import useCategories from "@/mixins/useCategories";
import addAsyncComponent from "@/utils/addAsyncComponent";

const ViewHeader = addAsyncComponent(() => import("./ViewHeader.vue"));
const WidgetProducts = addAsyncComponent(
  () => import("@/widget/widget-products/WidgetProducts.vue")
);
const { isLoading, isError } = useCategories();
</script>

<template>
  <app-container
    class="container category-view"
    :is-loading="isLoading"
    :is-error="isError"
  >
    <view-header class="category-view__header" />
    <widget-products class="category-view__products" />
  </app-container>
</template>

<style scoped>
.category-view__products {
  margin-top: 20px;
}
</style>
