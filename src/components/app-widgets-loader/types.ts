import { AsyncComponentLoader } from "vue";

export interface IWidgets {
  [key: string]: {
    widgetLink: string;
    component: AsyncComponentLoader;
  };
}
