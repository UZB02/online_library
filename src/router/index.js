import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LibraryLayout from '../../src/layouts/Library.vue'
import GenresLayout from '../../src/layouts/Genres.vue'

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
    {
      path: "/catalog/genres/:slug",
      name: "CatalogGenres",
      component: () => import("../views/CatalogGenresView.vue"),
      meta: {
        layout: GenresLayout,
      },
    },
    {
      path: "/catalog/genres/:slug/subject/:id",
      name: "Subject",
      component: () => import("../views/SubjectView.vue"),
      meta: {
        layout: GenresLayout,
      },
    },
    {
      path: "/catalog/genres/:slug/subject/:id/books",
      name: "All Books",
      component: () => import("../views/AllBooksView.vue"),
      meta: {
        layout: GenresLayout,
      },
    },
  ],
});

export default router
