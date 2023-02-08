<script lang="ts" setup>
import AppRequestContainer from "@/components/app-request-container/AppRequestContainer.vue";
import useCategoriesStore from "@/stores/categories-store/categoriesStore";
import useCityStore from "@/stores/cityStore";
import { storeToRefs } from "pinia";
import { reactive, watch } from "vue";

const data = reactive({
  isError: false,
  isLoading: false,
});

const getCategories = async () => {
  try {
    data.isLoading = true;
    const { storeGetCategories } = useCategoriesStore();
    await storeGetCategories();
  } catch (error) {
    console.error(error);
    data.isError = true;
  } finally {
    data.isLoading = false;
  }
};

const { storeCategories } = storeToRefs(useCategoriesStore());
if (storeCategories.value.length === 0) getCategories();

const { storeCity } = storeToRefs(useCityStore());
watch(storeCity, getCategories);
</script>

<template>
  <app-request-container
    :is-loading="data.isLoading"
    :is-error="data.isError"
    class="container"
  >
    <article class="categories">
      <ul class="categories__list">
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
    </article>
  </app-request-container>
</template>

<style scoped>
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
