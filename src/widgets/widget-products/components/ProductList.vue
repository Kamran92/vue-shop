<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import useCityStore from "@/stores/cityStore";
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ activeFilter: string }>();

const { params } = useRoute();
const products = ref([]);
const isLoading = ref(false);
const isError = ref(false);

const getCategorySlug = () => {
  const { activeFilter } = props;
  const { categorySlug } = params;
  return activeFilter === "all" ? categorySlug : activeFilter;
};

const getProducts = async () => {
  try {
    isLoading.value = true;
    const { storeCity } = storeToRefs(useCityStore());
    const URL = `https://nlstar.com/ru/api/catalog3/v1/menutags/${getCategorySlug()}/`;
    const params = { city_id: storeCity.value.id };
    const { data } = await axios.get(URL, { params });
    products.value = data.products;
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
    <ul class="list">
      <li v-for="(product, index) in products" :key="index" class="list__item">
        <product-card :product="product" />
      </li>
    </ul>
  </app-request-container>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
