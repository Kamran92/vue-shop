import AppError from "@/components/AppError.vue";
import AppLoading from "@/components/AppLoading.vue";
import { AsyncComponentLoader, defineAsyncComponent } from "vue";

export default (
  loader: AsyncComponentLoader,
  loadingComponent = AppLoading,
  errorComponent = AppError
) => {
  return defineAsyncComponent({
    loader,
    loadingComponent,
    errorComponent,
  });
};
