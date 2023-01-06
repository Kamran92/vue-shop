import useCityIdStore from "@/stores/cityId";
import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

export default defineStore("categories", () => {
  const { city } = storeToRefs(useCityIdStore());

  type TCategories = Array<{
    slug: string;
    image: string;
    text_color: string;
    name: string;
    children: Array<{ name: string; slug: string }>;
  }>;
  const storeCategories: Ref<TCategories> = ref([]);

  const storeGetCategories = async () => {
    try {
      const URL = "https://nlstar.com/ru/api/catalog3/v1/menutags/";
      const params = { city_id: city.value.id };
      const { data } = await axios.get(URL, { params });
      storeCategories.value = data.tags;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  const storeGetCategoryBySlug = (slug: string) => {
    return storeCategories.value.find((i) => i.slug === slug);
  };

  return { storeCategories, storeGetCategories, storeGetCategoryBySlug };
});
