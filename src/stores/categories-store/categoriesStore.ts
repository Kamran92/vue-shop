import * as api from "./api";
import useCityStore from "@/stores/city-store/cityStore";
import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

export default defineStore("categories", () => {
  type TCategories = Array<{
    slug: string;
    image: string;
    text_color: string;
    name: string;
    children: Array<{ name: string; slug: string }>;
  }>;

  const { storeCity } = storeToRefs(useCityStore());

  const storeCategories: Ref<TCategories> = ref([]);

  const storeGetCategories = async () => {
    storeCategories.value = await api.getCategories(storeCity.value.id);
  };

  const storeGetCategoryBySlug = (slug: string) => {
    return storeCategories.value.find((i) => i.slug === slug);
  };

  return { storeCategories, storeGetCategories, storeGetCategoryBySlug };
});
