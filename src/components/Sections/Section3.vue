<template>
  <div
    class="container mx-auto flex flex-col gap-7 items-center justify-center"
  >
    <div class="top w-full flex items-center justify-evenly">
      <span>
        <img
          src="../../img/book_shelves.png"
          class="hidden md:block w-28 h-28"
          alt=""
        />
      </span>
      <span class="text-start w-[80%] md:w-1/2">
        <h1 class="text-2xl md:text-4xl">
          Badiiy adabiyotlar
        </h1>
        <h2>O'zbek va jahon adabiyotining eng sara asarlari</h2>
      </span>
      <button
        @click="toggleFilter"
        class="flex items-center justify-center text-green-500 cursor-pointer"
      >
        <span class="hidden underline text-lg md:block">Eng yangi kitoblar</span>
        <i class="pi pi-angle-right"></i>
      </button>
    </div>
    <div>
      <Carusel :products="products"></Carusel>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Carusel from "../Carusel/carusel.vue"
import axios from "axios";

const products = ref([]);
function getProducts() {
  axios
    .get("/api/books")
    .then((response) => {
      products.value = response.data.filter(item => item.tipe === "file");
      console.log(products.value);
    })
    .catch((error) => {
      console.error(error);
    });
}
getProducts();
getProducts()
</script>
<style scoped>
</style>
