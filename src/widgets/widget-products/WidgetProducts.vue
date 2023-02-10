<script setup lang="ts">
import * as api from "./api";
import ProductFilter from "./components/ProductFilter.vue";
import ProductList from "./components/ProductList.vue";
import AppRequestContainer from "@/components/app-request-container/AppRequestContainer.vue";
import useCityStore from "@/stores/city-store/cityStore";
import { storeToRefs } from "pinia";
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";

const { params } = useRoute();

interface IData {
  products: Array<{
    main_image_thumb_300: string;
    category: { name: string };
    present_name: string;
    comment_name: string;
    price: number;
    allowed: boolean;
    available: boolean;
  }>;
  isLoading: boolean;
  isError: boolean;
  activeFilter: string;
}
const data: IData = reactive({
  products: [],
  isLoading: false,
  isError: false,
  activeFilter: "all",
});

const getCategorySlug = (categorySlug: unknown, activeFilter: string) => {
  if (typeof categorySlug !== "string") return "";
  return activeFilter === "all" ? categorySlug : activeFilter;
};

const getProducts = async () => {
  try {
    data.isLoading = true;
    const { storeCity } = storeToRefs(useCityStore());
    data.products = await api.getProducts(
      storeCity.value.id,
      getCategorySlug(params.categorySlug, data.activeFilter)
    );
  } catch (error) {
    console.error(error);
    data.isError = true;
  } finally {
    data.isLoading = false;
  }
};

watch(() => data.activeFilter, getProducts, { immediate: true });
</script>

<template>
  <article class="products">
    <product-filter v-model="data.activeFilter" class="products__filter" />

    <app-request-container
      :is-loading="data.isLoading"
      :is-error="data.isError"
    >
      <product-list class="products__list" :products="data.products" />
    </app-request-container>
  </article>
</template>

<style scoped>
.products {
  display: flex;
}

@media screen and (max-width: 768px) {
  .products {
    flex-direction: column;
  }

  .products__list {
    margin-top: 34px;
  }
}
</style>
