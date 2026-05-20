<script setup lang="ts">
import ProductCard from "./ProductCard.vue";

type TProducts = Array<{
  main_image_thumb_300: string;
  category: { name: string };
  present_name: string;
  comment_name: string;
  price: number;
  allowed: boolean;
  available: boolean;
}>;
defineProps<{ products: TProducts }>();
</script>

<template>
  <ul v-if="products.length" class="list">
    <li v-for="(product, index) in products" :key="index">
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
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
