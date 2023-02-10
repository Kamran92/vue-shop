import addAsyncComponent from "@/utils/addAsyncComponent";
import { AsyncComponentLoader } from "vue";

interface IWidgets {
  [key: string]: {
    widgetLink: string;
    component: AsyncComponentLoader;
  };
}

const widgets: IWidgets = {
  widgetCategories: {
    widgetLink: "@/widgets/WidgetCategories.vue",
    component: addAsyncComponent(
      () => import("@/widgets/widget-categories/WidgetCategories.vue")
    ),
  },
  widgetProducts: {
    widgetLink: "@/widgets/widget-products/WidgetProducts.vue",
    component: addAsyncComponent(
      () => import("@/widgets/widget-products/WidgetProducts.vue")
    ),
  },
};

export default widgets;
