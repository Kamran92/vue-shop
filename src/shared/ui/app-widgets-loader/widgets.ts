import addAsyncComponent from "@/shared/lib/addAsyncComponent";
import { AsyncComponentLoader } from "vue";

interface IWidgets {
  [key: string]: {
    widgetLink: string;
    component: AsyncComponentLoader;
  };
}

const widgets: IWidgets = {
  widgetCategories: {
    widgetLink: "@/widgets/categories/ui/CategoriesWidget.vue",
    component: addAsyncComponent(
      () => import("@/widgets/categories/ui/CategoriesWidget.vue")
    ),
  },
  widgetProducts: {
    widgetLink: "@/widgets/products/ui/ProductsWidget.vue",
    component: addAsyncComponent(
      () => import("@/widgets/products/ui/ProductsWidget.vue")
    ),
  },
};

export default widgets;
