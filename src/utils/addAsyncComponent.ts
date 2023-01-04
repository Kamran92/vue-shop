import { defineAsyncComponent } from "vue";

import AppError from "@/components/AppError.vue";
import AppLoading from "@/components/AppLoading.vue";

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
