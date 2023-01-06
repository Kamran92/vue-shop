import App from "./App.vue";
import "./assets/styles/index.css";
import router from "./router";
import { createPinia } from "pinia";
import { createApp } from "vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
