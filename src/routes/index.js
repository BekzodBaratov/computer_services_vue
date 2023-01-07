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
    path: "/shop/:id",
    name: "ShopSingle",
    component: () => import("../view/ShopSingleView.vue"),
  },
  {
    path: "/shop/category",
    name: "ShopCategory",
    component: () => import("../view/ShopCategoryView.vue"),
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
    path: "/services",
    name: "Services",
    component: () => import("../view/ServicesView.vue"),
  },
  {
    path: "/services/:id",
    name: "Services Item",
    component: () => import("../view/ServicesItemView.vue"),
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("../view/BasketView.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../view/Favorites.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../view/ProfileView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../view/404.vue"),
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
