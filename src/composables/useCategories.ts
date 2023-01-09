import useCategoriesStore from "@/stores/categoriesStore";
import useCityStore from "@/stores/cityStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export default () => {
  const { storeCategories } = storeToRefs(useCategoriesStore());
  const { city } = storeToRefs(useCityStore());
  const { storeGetCategories } = useCategoriesStore();

  const isError = ref(false);
  const isLoading = ref(false);

  const getCategories = async () => {
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

  return { isError, isLoading };
};
