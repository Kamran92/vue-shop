<script setup lang="ts">
import useCategoriesStore from "@/entities/category/model/categoriesStore";
import useCityStore from "@/entities/city/model/cityStore";
import AppRequestContainer from "@/shared/ui/app-request-container/AppRequestContainer.vue";
import AppViewHeader from "@/shared/ui/app-view-header/AppViewHeader.vue";
import AppWidgetsLoader from "@/shared/ui/app-widgets-loader/AppWidgetsLoader.vue";
import { storeToRefs } from "pinia";
import { reactive, watch } from "vue";

defineProps<{ widgetSignatures: Array<string> }>();

const data = reactive({
  isError: false,
  isLoading: false,
});

const getCategories = async () => {
  try {
    data.isLoading = true;
    const { storeGetCategories } = useCategoriesStore();
    const { storeCity } = storeToRefs(useCityStore());
    await storeGetCategories(storeCity.value.id);
  } catch (error) {
    console.error(error);
    data.isError = true;
  } finally {
    data.isLoading = false;
  }
};

const { storeCategories } = storeToRefs(useCategoriesStore());
if (storeCategories.value.length === 0) getCategories();

const { storeCity } = storeToRefs(useCityStore());
watch(storeCity, getCategories);
</script>

<template>
  <app-request-container
    class="container"
    :is-loading="data.isLoading"
    :is-error="data.isError"
  >
    <app-view-header link="/" />
    <app-widgets-loader :widget-signatures="widgetSignatures" />
  </app-request-container>
</template>
