import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../view/ShopView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../view/AboutView.vue"),
  },
  {
    path: "/configurator",
    name: "Configurator",
    component: () => import("../view/ConfiguratorView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../view/ContactView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../view/LoginView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../view/RegisterView.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../view/ServicesView.vue"),
  },
  {
    path: "/services/:id",
    name: "Services Item",
    component: () => import("../view/ServicesItemView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
