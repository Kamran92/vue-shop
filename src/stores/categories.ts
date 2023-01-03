import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

import useCityIdStore from "@/stores/cityId";

export default defineStore("categories", () => {
  const { city } = storeToRefs(useCityIdStore());

  interface ICategories {
    slug: string;
    image: string;
    text_color: string;
    name: string;
  }
  const storeCategories: Ref<Array<ICategories>> = ref([]);

  const storeGetCategories = async () => {
    const URL = "https://nlstar.com/ru/api/catalog3/v1/menutags/";
    const params = { city_id: city.value.id };
    const { data } = await axios.get<{ tags: ICategories[] }>(URL, { params });
    storeCategories.value = data.tags;
  };

  const storeGetCategoryName = (slug: string): string => {
    const category = storeCategories.value.find((i) => i.slug === slug);
    return category?.name ?? "";
  };

  return { storeCategories, storeGetCategories, storeGetCategoryName };
});
