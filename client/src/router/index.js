import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        layout: "default",
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      meta: {
        layout: "default",
      },
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/coffee",
      name: "Coffee",
      meta: {
        layout: "default",
      },
      component: () => import("../views/Coffee.vue"),
    },
  ],
});

export default router;
