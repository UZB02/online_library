<template>
  <div
    class="container mx-auto flex flex-col gap-7 items-center justify-center p-4"
  >
    <div class="top w-full flex items-center justify-evenly">
      <span>
        <img
          src="../../img/book.png"
          class="hidden md:block w-28 h-28"
          alt=""
        />
      </span>
      <span>
        <h1 class="text-2xl md:text-4xl">
          Kutibxonamiz tavsiya etadigan adabiyotlar
        </h1>
        <h2>O'qish uchun tavsiya etiladigan adabiyotlar</h2>
      </span>
      <button
        @click="toggleFilter"
        class="flex items-center justify-center text-green-500 cursor-pointer"
      >
        <span class="hidden underline text-lg md:block">Eng sara kitoblar</span>
        <i class="pi pi-angle-right"></i>
      </button>
    </div>
    <div class="w-full z-20">
        <Carousel class="flex flex-col" :value="products" :numVisible="3" :numScroll="1">
      <template #item="slotProps">
        <div class="product-item">
            <h1>Salom</h1>
          <div class="product-name">{{ slotProps.data.name }}</div>
        </div>
      </template>
    </Carousel>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";

import Card from "primevue/card";

const products = ref([
  { name: "Product 1" },
  { name: "Product 2" },
  { name: "Product 3" },
  { name: "Product 4" },
  { name: "Product 5" },
  { name: "Product 3" },
  { name: "Product 4" },
  { name: "Product 5" },
]);
</script>
<style scoped></style>
