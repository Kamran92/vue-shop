import CategoryView from "@/pages/category/ui/CategoryView.vue";
import HomeView from "@/pages/home/ui/HomeView.vue";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: {
      widgetSignatures: ["widgetCategories"],
    },
  },
  {
    path: "/category/:categorySlug",
    name: "category",
    component: CategoryView,
    props: {
      widgetSignatures: ["widgetProducts"],
    },
  },
];
