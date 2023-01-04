import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

import useCategoriesStore from "@/stores/categories";
import useCityIdStore from "@/stores/cityId";

export default () => {
  const { storeCategories } = storeToRefs(useCategoriesStore());
  const { city } = storeToRefs(useCityIdStore());
  const { storeGetCategories } = useCategoriesStore();

  const isError = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  const getCategories = async (): Promise<void> => {
    try {
      isLoading.value = true;
      await storeGetCategories();
    } catch (error) {
      console.error(error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  if (storeCategories.value.length === 0) getCategories();

  watch(city, getCategories);

  return { storeCategories, isError, isLoading };
};
