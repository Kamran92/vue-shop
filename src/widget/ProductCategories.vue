<template>
  <section class="container categories">
    <h2 class="categories__title">Категории товаров</h2>
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="isError">Произошла ошибка...</div>
    <ul v-else class="categories__list">
      <li
        v-for="({ slug, image, text_color, name }, index) in categories"
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
import axios from "axios";
import { storeToRefs } from "pinia";
import { Ref, ref, watch } from "vue";

import useCityIdStore from "@/stores/cityId";

const { city } = storeToRefs(useCityIdStore());

interface ICategories {
  slug: string;
  image: string;
  text_color: string;
  name: string;
}
const categories: Ref<ICategories[]> = ref([]);
const isError = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const getCatalogs = async () => {
  try {
    isLoading.value = true;
    const URL = "https://nlstar.com/ru/api/catalog3/v1/menutags/";
    const params = { city_id: city.value.id };
    const { data } = await axios.get<{ tags: ICategories[] }>(URL, { params });
    categories.value = data.tags;
  } catch (error) {
    console.error(error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};

getCatalogs();

watch(city, getCatalogs);
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
