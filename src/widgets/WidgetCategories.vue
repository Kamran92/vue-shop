<script lang="ts" setup>
import AppRequestContainer from "@/components/AppRequestContainer.vue";
import useCategories from "@/composables/useCategories";
import useCategoriesStore from "@/stores/categories";
import { storeToRefs } from "pinia";

const { storeCategories } = storeToRefs(useCategoriesStore());
const { isLoading, isError } = useCategories();
</script>

<template>
  <app-request-container
    :is-loading="isLoading"
    :is-error="isError"
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
