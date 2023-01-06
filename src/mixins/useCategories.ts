import useCategoriesStore from "@/stores/categories";
import useCityIdStore from "@/stores/cityId";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export default () => {
  const { storeCategories } = storeToRefs(useCategoriesStore());
  const { city } = storeToRefs(useCityIdStore());
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

  return { storeCategories, isError, isLoading };
};
