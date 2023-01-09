import CategoryView from "@/views/CategoryView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: {
      widgets: ["WidgetCategories"],
    },
  },
  {
    path: "/category/:categorySlug",
    name: "category",
    component: CategoryView,
    props: {
      widgets: ["WidgetProducts"],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
