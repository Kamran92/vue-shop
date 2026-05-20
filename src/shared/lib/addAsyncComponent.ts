import AppError from "@/shared/ui/AppError.vue";
import AppLoading from "@/shared/ui/AppLoading.vue";
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
