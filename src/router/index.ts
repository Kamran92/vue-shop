import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory(process.env.BASE_URL);
const router = createRouter({ history, routes });

export default router;
