import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LibraryLayout from '../../src/layouts/Library.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: () => import("../views/CatologView.vue"),
      meta: {
        layout: LibraryLayout,
      },
    },
  ],
});

export default router
