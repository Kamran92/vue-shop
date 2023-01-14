<script setup lang="ts">
import * as api from "../api";
import * as types from "../types";
import ProductCard from "./ProductCard.vue";
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import useCityStore from "@/stores/cityStore";
import { storeToRefs } from "pinia";
import { Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ activeFilter: string }>();

const { params } = useRoute();
const products: Ref<types.TProducts> = ref([]);
const isLoading = ref(false);
const isError = ref(false);

const getCategorySlug = () => {
  const { categorySlug } = params;
  if (typeof categorySlug !== "string") return "";
  const { activeFilter } = props;
  return activeFilter === "all" ? categorySlug : activeFilter;
};

const getProducts = async () => {
  try {
    isLoading.value = true;
    const { storeCity } = storeToRefs(useCityStore());
    products.value = await api.getProducts(
      storeCity.value.id,
      getCategorySlug()
    );
  } catch (error) {
    console.error(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

watch(() => props.activeFilter, getProducts, { immediate: true });
</script>

<template>
  <app-request-container :is-loading="isLoading" :is-error="isError">
    <ul v-if="products.length" class="list">
      <li v-for="(product, index) in products" :key="index" class="list__item">
        <product-card :product="product" />
      </li>
    </ul>
    <p>Данных нет</p>
  </app-request-container>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
