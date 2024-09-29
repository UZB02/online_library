<template>
  <div
    class="container mx-auto flex flex-col gap-7 items-center justify-center "
  >
    <div class="top w-full flex items-center justify-evenly">
      <span>
        <img
          src="../../img/audio_books.png"
          class="hidden md:block w-28 h-28"
          alt=""
        />
      </span>
      <span class="text-start w-[80%] md:w-1/2">
        <h1 class="text-2xl md:text-4xl">
         Audioresurslar
        </h1>
        <h2>Tinglash uchun audioadabiyotlar</h2>
      </span>
      <button
        @click="toggleFilter"
        class="flex items-center justify-center text-green-500 cursor-pointer"
      >
        <span class="hidden underline text-lg md:block">Eng yangi audiokitoblar</span>
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
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 2,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 3,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 4,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 5,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 6,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
        {
            id: 1,
            name: 'Jannati odamlar',
            image: 'https://avatars.mds.yandex.net/i?id=4c03db48f218fde6888416907cab1d6235e7c083-6873210-images-thumbs&n=13',
            autor: "Xudoyberdi To'xtaboyev",
            lang: 'UZ'
        },
    ]
);
</script>
<style scoped>
</style>
