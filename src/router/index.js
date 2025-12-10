// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Layoutlar
import LibraryLayout from "../layouts/Library.vue";
import GenresLayout from "../layouts/Genres.vue";

// Views
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CatalogView from "../views/CatologView.vue"; // typo tuzatildi
import CatalogGenresView from "../views/CatalogGenresView.vue";
import SubjectView from "../views/SubjectView.vue";
import AllBooksView from "../views/AllBooksView.vue";
import UnikalTestView from "../Vaqtincha/unikaltestview.vue"; // case-sensitive

// Axios konfiguratsiyasi (frontendda API chaqirish uchun)
import axios from "axios";
// axios.defaults.baseURL = "https://library-backend-ixau.onrender.com";
axios.defaults.baseURL = "http://localhost:5001";

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
      component: AboutView,
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: CatalogView,
      meta: {
        layout: LibraryLayout,
      },
    },
    {
      path: "/test/:token",
      name: "TestToken",
      component: UnikalTestView, // case-sensitive import ishlatilmoqda
      meta: {
        layout: LibraryLayout,
      },
    },
    {
      path: "/catalog/:slug",
      name: "CatalogGenres",
      component: CatalogGenresView,
      meta: {
        layout: GenresLayout,
      },
    },
    {
      path: "/catalog/genres/:slug/:id",
      name: "Subject",
      component: SubjectView,
      meta: {
        layout: GenresLayout,
      },
    },
    {
      path: "/catalog/genres/:slug/subject/:id/books",
      name: "AllBooks",
      component: AllBooksView,
      meta: {
        layout: GenresLayout,
      },
    },
  ],
});

export default router;
