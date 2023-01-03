<template>
  <section class="container categories">
    <h2 class="categories__title">Категории товаров</h2>
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="isError">Произошла ошибка...</div>
    <ul v-else class="categories__list">
      <li
        v-for="({ slug, image, text_color, name }, index) in storeCategories"
        :key="index"
        class="categories__item"
      >
        <router-link
          class="categories__link"
          :to="`/category/${slug}`"
          :style="`background-image: url('${image}')`"
        >
          <h3
            class="categories__category-title"
            :style="`color: ${text_color}`"
          >
            {{ name }}
          </h3>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

import useCategoriesStore from "@/stores/categories";
import useCityIdStore from "@/stores/cityId";

const { city } = storeToRefs(useCityIdStore());
const categoriesStore = useCategoriesStore();
const { storeCategories } = storeToRefs(categoriesStore);
const { storeGetCategories } = categoriesStore;

const isError = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const getCategories = async (): Promise<void> => {
  try {
    isLoading.value = true;
    await storeGetCategories();
  } catch (error) {
    console.error(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
getCategories();

watch(city, getCategories);
</script>

<style scoped>
.categories__title {
  margin-bottom: 20px;

  color: #272727;
  font-weight: 500;
  font-size: 44px;
  line-height: 44px;
}

.categories__list {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.categories__item {
  border-radius: 5px;
}

.categories__link {
  position: relative;

  display: block;
  width: 271px;
  height: 152px;
  padding: 20px;

  background-repeat: no-repeat;
  background-position: right;
}

.categories__category-title {
  font-weight: 500;
  font-size: 24px;
  font-style: normal;
  line-height: 28px;
}
</style>
