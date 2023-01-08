import addAsyncComponent from "@/utils/addAsyncComponent";
import { AsyncComponentLoader } from "vue";

interface IWidgets {
  [key: string]: {
    widgetLink: string;
    component: AsyncComponentLoader;
  };
}
const widgets: IWidgets = {
  WidgetCategories: {
    widgetLink: "@/widgets/WidgetCategories.vue",
    component: addAsyncComponent(
      () => import("@/widgets/WidgetCategories.vue")
    ),
  },
  WidgetProducts: {
    widgetLink: "@/widgets/widget-products/WidgetProducts.vue",
    component: addAsyncComponent(
      () => import("@/widgets/widget-products/WidgetProducts.vue")
    ),
  },
};

export default (signature: string) => {
  const widget = widgets[signature];
  if (widget) return widget;
};
