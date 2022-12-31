<template>
  <section class="container categories">
    <h2 class="categories__title">Категории товаров</h2>
    <ul class="categories__list">
      <li
        v-for="({ slug, image, text_color, name }, index) in categories"
        :key="index"
        class="categories__item"
      >
        <router-link
          class="categories__link"
          :to="`/${slug}`"
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
import { ref, Ref } from "vue";

interface ICategories {
  slug: string;
  image: string;
  text_color: string;
  name: string;
}
const categories: Ref<ICategories[]> = ref([]);

(async () => {
  try {
    const { data } = await axios.get<{ tags: ICategories[] }>(
      "https://nlstar.com/ru/api/catalog3/v1/menutags/"
    );
    categories.value = data.tags;
  } catch (error) {
    console.error(error);
  }
})();
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
  display: grid;
  grid-gap: 22px;
  grid-template-columns: repeat(4, 1fr);
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
