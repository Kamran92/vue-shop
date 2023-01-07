<script setup lang="ts">
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import useCityStore from "@/stores/city";
import ProductCard from "@/widget/widget-products/components/ProductCard.vue";
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ activeFilter: string }>();

const { categorySlug } = useRoute().params;
const { city } = storeToRefs(useCityStore());
const products = ref([]);
const isLoading = ref(false);
const isError = ref(false);

const getProducts = async () => {
  try {
    isLoading.value = true;
    const slug =
      props.activeFilter === "all" ? categorySlug : props.activeFilter;
    const URL = `https://nlstar.com/ru/api/catalog3/v1/menutags/${slug}/`;
    const params = { city_id: city.value.id };
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
