<script setup lang="ts">
import BackIcon from "./icons/BackIcon.vue";
import useCategoriesStore from "@/stores/categories-store/categoriesStore";
import { useRoute } from "vue-router";

defineProps<{
  title?: string;
  link?: string;
}>();

const getTitle = () => {
  const { storeGetCategoryBySlug } = useCategoriesStore();
  const { categorySlug } = useRoute().params;
  if (typeof categorySlug !== "string") return "";
  return storeGetCategoryBySlug(categorySlug)?.name ?? "";
};
</script>

<template>
  <router-link v-if="link" class="link" to="/">
    <back-icon class="link__icon" />
    <h2 class="link__title">{{ getTitle() }}</h2>
  </router-link>
  <h2 v-else class="link__title">{{ title }}</h2>
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
