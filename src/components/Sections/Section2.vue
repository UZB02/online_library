<template>
  <div
    class="container mx-auto flex flex-col gap-7 items-center justify-center"
  >
    <div class="top w-full flex items-center justify-evenly p-4">
      <span>
        <img
          src="../../img/book.png"
          class="hidden md:block w-28 h-28"
          alt=""
        />
      </span>
      <span class="text-start w-[80%] md:w-1/2">
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
    <div>
      <Carusel :products="products"></Carusel>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Carusel from "../Carusel/carusel.vue"

const products = ref(
    [
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 2,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 3,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 4,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 5,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 6,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://tovar.uz/images/company/444/tovar/8584/o_1_5ef850d429d3f.jpg',
            autor: "Tog'ay Murod",
            lang: 'UZ'
        },
    ]
);
</script>
<style scoped>
</style>
