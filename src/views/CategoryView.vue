<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

import AppWidgetContainer from "@/components/AppWidgetContainer.vue";
import useCategories from "@/mixins/useCategories";
import useCategoriesStore from "@/stores/categories";
import addAsyncComponent from "@/utils/addAsyncComponent";

const AppWidgetHeader = addAsyncComponent(
  () => import("@/components/app-widget-header/AppWidgetHeader.vue")
);
const WidgetProducts = addAsyncComponent(
  () => import("@/widget/widget-products/WidgetProducts.vue")
);
const { storeGetCategoryBySlug } = useCategoriesStore();
const { categorySlug } = useRoute().params;
const { isLoading, isError } = useCategories();

const widgetHeader = computed(() => {
  if (typeof categorySlug !== "string") return "";
  return storeGetCategoryBySlug(categorySlug)?.name ?? "";
});
</script>

<template>
  <app-widget-container
    class="container category-view"
    :is-loading="isLoading"
    :is-error="isError"
  >
    <app-widget-header
      class="category-view__header"
      link="/"
      :title="widgetHeader"
    />
    <widget-products class="category-view__products" />
  </app-widget-container>
</template>

<style scoped>
.category-view__products {
  margin-top: 20px;
}
</style>
