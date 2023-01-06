import AppError from "@/components/AppError.vue";
import AppLoading from "@/components/AppLoading.vue";
import { defineAsyncComponent } from "vue";

export default (
  loader: () => Promise<any>,
  loadingComponent = AppLoading,
  errorComponent = AppError
) => {
  return defineAsyncComponent({
    loader,
    loadingComponent,
    errorComponent,
  });
};
