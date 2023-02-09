import * as api from "./api";
import * as types from "./types";
import useCityStore from "@/stores/cityStore";
import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

export default defineStore("categories", () => {
  const { storeCity } = storeToRefs(useCityStore());

  const storeCategories: Ref<types.TCategories> = ref([]);

  const storeGetCategories = async () => {
    storeCategories.value = await api.getCategories(storeCity.value.id);
  };

  const storeGetCategoryBySlug = (slug: string) => {
    return storeCategories.value.find((i) => i.slug === slug);
  };

  return { storeCategories, storeGetCategories, storeGetCategoryBySlug };
});
