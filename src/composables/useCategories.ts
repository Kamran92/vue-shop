import useCategoriesStore from "@/stores/categoriesStore";
import useCityStore from "@/stores/cityStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export default () => {
  const isError = ref(false);
  const isLoading = ref(false);

  const getCategories = async () => {
    try {
      isLoading.value = true;
      const { storeGetCategories } = useCategoriesStore();
      await storeGetCategories();
    } catch (error) {
      console.error(error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const { storeCategories } = storeToRefs(useCategoriesStore());
  if (storeCategories.value.length === 0) getCategories();

  const { city } = storeToRefs(useCityStore());
  watch(city, getCategories);

  return { isError, isLoading };
};
