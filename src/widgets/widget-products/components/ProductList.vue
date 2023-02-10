<script setup lang="ts">
import * as api from "../api";
import ProductCard from "./ProductCard.vue";
import AppRequestContainer from "@/components/app-request-container/AppRequestContainer.vue";
import useCityStore from "@/stores/city-store/cityStore";
import { storeToRefs } from "pinia";
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ activeFilter: string }>();
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
}
const data: IData = reactive({
  products: [],
  isLoading: false,
  isError: false,
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
      getCategorySlug(params.categorySlug, props.activeFilter)
    );
  } catch (error) {
    console.error(error);
    data.isError = true;
  } finally {
    data.isLoading = false;
  }
};

watch(() => props.activeFilter, getProducts, { immediate: true });
</script>

<template>
  <app-request-container :is-loading="data.isLoading" :is-error="data.isError">
    <ul v-if="data.products.length" class="list">
      <li v-for="(product, index) in data.products" :key="index">
        <product-card
          :link-img="product.main_image_thumb_300"
          :category-name="product.category?.name"
          :present-name="product.present_name"
          :comment-name="product.comment_name"
          :price="product.price"
          :is-buy="product.allowed && product.available"
        />
      </li>
    </ul>
    <p v-else>данных нет</p>
  </app-request-container>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
