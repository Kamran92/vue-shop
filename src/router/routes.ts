import CategoryView from "@/views/CategoryView.vue";
import HomeView from "@/views/HomeView.vue";

export default [
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
