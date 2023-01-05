import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

import useCityIdStore from "@/stores/cityId";

export default defineStore("categories", () => {
  const { city } = storeToRefs(useCityIdStore());

  interface IChildren {
    name: string;
    slug: string;
  }
  interface ICategories {
    slug: string;
    image: string;
    text_color: string;
    name: string;
    children: Array<IChildren>;
  }
  const storeCategories: Ref<Array<ICategories>> = ref([]);

  const storeGetCategories = async () => {
    try {
      const URL = "https://nlstar.com/ru/api/catalog3/v1/menutags/";
      const params = { city_id: city.value.id };
      const { data } = await axios.get<{ tags: ICategories[] }>(URL, {
        params,
      });
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
