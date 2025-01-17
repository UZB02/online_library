<template>
  <div class="container flex flex-col lg:flex-row gap-3  justify-between">
      <span @click="openMenu()"  class="absolute lg:hidden flex items-center justify-center gap-1 bg-slate-100 rounded p-1 right-3 top-[90px] text-green-500">
        <i class="pi pi-sliders-v"></i>
        <h1>Janrlar</h1>
    </span>
    <div class="transition duration-500" :class="menu ? `left lg:block w-full lg:w-[25%]` : `hidden lg:block w-full lg:w-[25%]`">
      <div style="width: 100%" class="flex flex-col py-2 shadow rounded">
        <div class="flex flex-col items-center  overflow-y-scroll w-full">
            <span v-for="item in genres" @click="gotoGenresPage(item.id)" class="flex justify-between w-full gap-4 p-3 border-b-2 cursor-pointer transition duration-150 border-green-400 hover:bg-green-400 hover:text-white"><h1 class="">{{item.title}}</h1> <p class="text-slate-400">{{item.books}}</p></span>
        </div>
      </div>
    </div>
    <div class="right w-full px-3 flex flex-col gap-2 lg:w-[75%]">
      <div>
        <div class="flex gap-2 md:justify-between items-center">
          <div>
            <h1 class="text-lg font-bold text-green-500 md:text-2xl">
              Barcha kitoblar
            </h1>
            <span class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                fill="grey"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"
                />
              </svg>
              <p class="text-sm text-slate-500">3500 ta kitob</p>
            </span>
          </div>
          <span class="flex items-center justify-center cursor-pointer">
            <h1
              class="text-lg font-bold text-green-500 md:text-xl underline hidden md:block"
            >
              Barcha kitoblar
            </h1>
            <i class="pi pi-chevron-right text-xl text-green-500"></i>
          </span>
        </div>
        <Carousel
          :value="products"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          class="w-[] md:w-[]"
        >
          <template #item="slotProps">
            <div class="grid grid-rows-1 gap-1">
              <div
                @click="gotoIdPage(slotProps.data.id)"
                class="card relative flex flex-col transition-all duration-200 hover:-translate-y-2 gap-2 border cursor-pointer border-surface-200 dark:border-surface-700 rounded m-1 p-1"
              >
                <div class="">
                  <div class="relative mx-auto">
                    <img
                      :src="slotProps.data.image"
                      :alt="slotProps.data.name"
                      class="w-full h-44 md:h-44 rounded"
                    />
                  </div>
                </div>
                <div class="font-medium uppercase">
                  {{ slotProps.data.name }}
                </div>
                <div class="flex justify-between items-center">
                  <div class="font-semibold text-base md:text-xl">
                    {{ slotProps.data.autor }}
                  </div>
                  <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="" />
                  </span>
                </div>
                <span
                  :class="
                    slotProps.data.lang
                      ? 'absolute md:top-0 md:right-2 bg-slate-100 p-1 rounded text-sm'
                      : 'hidden'
                  "
                  >{{ slotProps.data.lang }}</span
                >
              </div>
            </div>
          </template>
        </Carousel>
      </div>
      <div>
        <div class="flex gap-2 md:justify-between items-center">
          <div>
            <h1 class="text-lg font-bold text-green-500 md:text-2xl">
              Barcha audikitoblar
            </h1>
            <span class="flex items-center gap-2">
              <svg
                width="24"
                fill="grey"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z"
                />
              </svg>
              <p class="text-sm text-slate-500">3500 ta kitob</p>
            </span>
          </div>
          <span class="flex items-center justify-center cursor-pointer">
            <h1
              class="text-lg font-bold text-green-500 md:text-xl underline hidden md:block"
            >
              Barcha audikitoblar
            </h1>
            <i class="pi pi-chevron-right text-xl text-green-500"></i>
          </span>
        </div>
        <Carousel
          :value="products"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          class="w-[] md:w-[]"
        >
          <template #item="slotProps">
            <div class="grid grid-rows-1 gap-1">
              <div
                @click="gotoIdPage(slotProps.data.id)"
                class="card relative flex flex-col transition-all duration-200 hover:-translate-y-2 gap-2 border cursor-pointer border-surface-200 dark:border-surface-700 rounded m-1 p-1"
              >
                <div class="">
                  <div class="relative mx-auto">
                    <img
                      :src="slotProps.data.image"
                      :alt="slotProps.data.name"
                      class="w-full h-44 md:h-44 rounded"
                    />
                  </div>
                </div>
                <div class="font-medium uppercase">
                  {{ slotProps.data.name }}
                </div>
                <div class="flex justify-between items-center">
                  <div class="font-semibold text-base md:text-xl">
                    {{ slotProps.data.autor }}
                  </div>
                  <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="" />
                  </span>
                </div>
                <span
                  :class="
                    slotProps.data.lang
                      ? 'absolute md:top-0 md:right-2 bg-slate-100 p-1 rounded text-sm'
                      : 'hidden'
                  "
                  >{{ slotProps.data.lang }}</span
                >
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
import ScrollPanel from "primevue/scrollpanel";
import Carousel from "primevue/carousel";
import { ref, onMounted } from "vue";
import router from "@/router";
import axios from "axios";
const menu=ref(false)

const catalogID=router.currentRoute.value.params.slug
console.log(catalogID);

function openMenu() {
    menu.value =!menu.value
}
const products = ref([
  {
    id: 1,
    name: "Product 1",
    autor: "Author 1",
    image: "https://picsum.photos/id/1015/500/300",
    lang: "English",
  },
  {
    id: 2,
    name: "Product 2",
    autor: "Author 2",
    image: "https://picsum.photos/id/1016/500/300",
    lang: "Spanish",
  },
  {
    id: 3,
    name: "Product 3",
    autor: "Author 3",
    image: "https://picsum.photos/id/1019/500/300",
    lang: "French",
  },
  {
    id: 4,
    name: "Product 4",
    autor: "Author 4",
    image: "https://picsum.photos/id/1018/500/300",
    lang: "Chinese",
  },
  {
    id: 5,
    name: "Product 5",
    autor: "Author 5",
    image: "https://picsum.photos/id/1019/500/300",
    lang: "Russian",
  },
  {
    id: 6,
    name: "Product 6",
    autor: "Author 6",
    image: "https://picsum.photos/id/1020/500/300",
    lang: "English",
  },
  {
    id: 7,
    name: "Product 7",
    autor: "Author 7",
    image: "https://picsum.photos/id/1021/500/300",
    lang: "Spanish",
  },
]);

const genres=ref()

function getCatalogs(){
  axios.get(`/api/catologs/${catalogID}`)
 .then(response => {
  genres.value=response.data
  console.log(response.data);
 })
}
getCatalogs()

function gotoGenresPage(id) {
    router.push(`/catalog/genres/${catalogID}/${id}`)
}
function gotoIdPage(id) {
  console.log(id);
}
const responsiveOptions = ref([
  {
    breakpoint: "1200px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "712px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "600px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "364px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
<style scoped>
  ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(0, 214, 0);
        border-radius: 10px;
    }
</style>
