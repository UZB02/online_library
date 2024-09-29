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
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 2,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 3,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 4,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 5,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 6,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
        {
            id: 1,
            name: 'Ot kishnagan kecha',
            image: 'https://avatars.mds.yandex.net/i?id=9b453dae7bf3ec127079ab5d0a936fd5fed50d3d-8497818-images-thumbs&n=13',
            price: "Tog'ay Murod",
            inventoryStatus: 'INSTOCK'
        },
    ]
);
</script>
<style scoped>
</style>
