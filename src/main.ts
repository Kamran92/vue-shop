import App from "./app/App.vue";
import { router } from "./app/providers/router";
import { pinia } from "./app/providers/store";
import "./shared/assets/styles/index.css";
import { createApp } from "vue";

createApp(App).use(router).use(pinia).mount("#app");
