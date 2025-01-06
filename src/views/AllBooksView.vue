<template>
  <div class="container md:h-[10vh]  mx-auto flex  items-center md:justify-center">
   <span class="w-[70%] py-3  md:w-[80%] flex text-green-400 items-center justify-center md:justify-start">
    <i class="pi pi-chevron-left"></i>
    <h1 class="text-xl md:text-2xl font-bold"><RouterLink :to="`/catalog/genres/${catalogID}`">O'zbek adaboyoti/</RouterLink> Sheriyat</h1>
   </span>
    <!-- <div class="w-2/3 cursor-pointer md:w-[80%] flex gap-2 text-green-400 items-center justify-center md:justify-start">
        <span class="text-sm underline">610 Kitob</span>
        <span class="text-sm underline">415 Audiokitob</span>
      </div> -->
  </div>
  <section>
  </section>
  <section class="w-full md:p-28 md:py-6">
    <div class="container mx-auto flex flex-col gap-7 justify-center">
      <Genres/>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Genres from "../components/Subject/Main.vue";
import { RouterLink } from "vue-router";
import router from "@/router";

const catalogID=router.currentRoute.value.params.slug
console.log(catalogID);
</script>
<style scoped>
</style>
