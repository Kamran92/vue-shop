import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CategoryView from "@/views/category-view/CategoryView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:categorySlug",
    name: "category",
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
