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
      path: "/login",
      name: "Login",
      meta: {
        layout: "auth",
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        layout: "auth",
      },
      component: () => import("../views/SignUpView.vue"),
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
    {
      path: "/labs",
      name: "Labs",
      meta: {
        layout: "default",
      },
      component: () => import("../views/Labs.vue"),
    },
    {
      path: "/labs/detail",
      name: "LabDetail",
      meta: {
        layout: "default",
      },
      component: () => import("../views/LabDetail.vue"),
    },
    {
      path: "/courses/detail",
      name: "CourseDetail",
      meta: {
        layout: "default",
      },
      component: () => import("../views/CourseDetail.vue"),
    },
    {
      path: "/courses",
      name: "Courses",
      meta: {
        layout: "default",
      },
      component: () => import("../views/Courses.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      meta: {
        layout: "default",
      },
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      meta: {
        layout: "auth",
      },
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
