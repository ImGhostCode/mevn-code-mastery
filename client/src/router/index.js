import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "../stores/auth.store";

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
      path: "/labs/detail/:slug",
      name: "LabDetail",
      meta: {
        layout: "default",
      },
      component: () => import("../views/LabDetail.vue"),
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
      path: "/courses/detail/:slug",
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
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()
        if (!authStore.user) next({ name: 'Login', params: {} })
        next()
      },
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/contributors",
      name: "Contributors",
      meta: {
        layout: "default",
      },
      component: () => import("../views/Contributors.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      meta: {
        layout: "default",
      },
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
