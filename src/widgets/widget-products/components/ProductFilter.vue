<script setup lang="ts">
import useCategoriesStore from "@/stores/categories-store/categoriesStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const FILTER_SLUG_ALL = { name: "Все продукты", slug: "all" };

const activeFilter = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
const filters = computed(() => {
  const { categorySlug } = useRoute().params;
  if (typeof categorySlug !== "string") return [];
  const { storeGetCategoryBySlug } = useCategoriesStore();
  const category = storeGetCategoryBySlug(categorySlug);
  const children = category?.children;
  return children ? [FILTER_SLUG_ALL, ...children] : [];
});
const isShowFilters = computed(() => {
  const NUMBER_FILTERS = 3;
  return filters.value.length >= NUMBER_FILTERS;
});

if (isShowFilters.value) {
  activeFilter.value = FILTER_SLUG_ALL.slug;
}
</script>

<template>
  <ul v-if="isShowFilters" class="list">
    <li
      v-for="({ name, slug }, index) in filters"
      :key="index"
      :class="{ 'list__item--active': activeFilter === slug }"
      class="list__item"
      @click="activeFilter = slug"
    >
      {{ name }}
    </li>
  </ul>
</template>

<style scoped>
.list {
  margin-right: 34px;
}

.list__item {
  width: 240px;
  padding: 8px 12px;

  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  border-bottom: 1px solid #e9eef3;
  cursor: pointer;
}

.list__item--active {
  background-color: #e9eef3;
}
</style>
