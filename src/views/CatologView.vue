<template>
  <div class="top w-full bg-slate-200">
    <div
      class="container md:h-[30vh] py-8 mx-auto flex items-center justify-center"
    >
      <span class="w-[80%]">
        <h1 class="text-2xl md:text-4xl text-green-500 font-bold">Kutibxona</h1>
        <p class="text-slate-500 text-sm">
          BMLibrary.uz kutubxonasiga xush kelibsiz
        </p>
      </span>
    </div>
  </div>
  <section>
    <div class="container mx-auto flex flex-col gap-7 justify-center">
      <SpeciesCards />
    </div>
  </section>
  <section class="w-full md:p-28 md:py-6">
    <div class="container mx-auto flex flex-col gap-7 justify-center">
      <GenresCards/>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SpeciesCards from "../components/Catalog/CatalogCard/SpeciesCard.vue";
import GenresCards from "../components/Catalog/CatalogGenres/GenresCards.vue";
</script>
<style scoped>
.top {
  background: url("https://avatars.mds.yandex.net/i?id=f56a68754d11505e0c0c86d3de5a4b12921f000f-9222419-images-thumbs&n=13");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  filter: none;
}
</style>
