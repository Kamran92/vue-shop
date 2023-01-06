<script setup lang="ts">
import ProductFilter from "./components/ProductFilter.vue";
import ProductList from "./components/ProductList.vue";
import { ref } from "vue";

const activeFilter = ref("all");
</script>

<template>
  <article class="products">
    <product-filter v-model="activeFilter" class="products__filter" />
    <product-list class="products__list" :active-filter="activeFilter" />
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
