<script setup lang="ts">
import BackIcon from "./icons/BackIcon.vue";
import useCategoriesStore from "@/stores/categories";
import { useRoute } from "vue-router";

const getTitle = () => {
  const { storeGetCategoryBySlug } = useCategoriesStore();
  const { categorySlug } = useRoute().params;
  if (typeof categorySlug !== "string") return "";
  return storeGetCategoryBySlug(categorySlug)?.name ?? "";
};
</script>

<template>
  <router-link class="link" to="/">
    <back-icon class="link__icon" />
    <h2 class="link__title">{{ getTitle() }}</h2>
  </router-link>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;
}

.link__icon {
  flex: none;
  margin-right: 10px;
}

.link__title {
  color: #272727;
  font-weight: 500;
  font-size: 44px;
  line-height: 44px;
}
</style>
