import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";
import AnimateOnScroll from "primevue/animateonscroll";
import "primeicons/primeicons.css";

const app = createApp(App)
app.directive("animateonscroll", AnimateOnScroll);
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: false,
    },
  },
});
app.use(ToastService);
app.mount('#app')
