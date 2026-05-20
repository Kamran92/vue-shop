import * as api from "../api";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export default defineStore("categories", () => {
  type TCategories = Array<{
    slug: string;
    image: string;
    text_color: string;
    name: string;
    children: Array<{ name: string; slug: string }>;
  }>;

  const storeCategories: Ref<TCategories> = ref([]);

  const storeGetCategories = async (cityId: string) => {
    storeCategories.value = await api.getCategories(cityId);
  };

  const storeGetCategoryBySlug = (slug: string) => {
    return storeCategories.value.find((i) => i.slug === slug);
  };

  return { storeCategories, storeGetCategories, storeGetCategoryBySlug };
});
