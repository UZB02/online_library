<template>
  <div class="">
  <Carousel
    :value="products"
    :numVisible="6"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    class="w-[95vw] md:w-[90vw]"
  >
    <template #item="slotProps">
      <div
        class="grid grid-rows-1 gap-1"
      >
        <div
        @click="gotoIdPage(slotProps.data.id)"
          class="card relative flex flex-col transition-all duration-200 hover:-translate-y-2 gap-2 border cursor-pointer border-surface-200 dark:border-surface-700 rounded m-1  border-r-4 border-salte-100"
        >
          <div class="">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.img"
                :alt="slotProps.data.title"
                class="w-full h-52 md:h-64 object-cover"
              />
            </div>
          </div>
        <div class="flex flex-col px-1">
            <div class="font-medium uppercase">{{ slotProps.data.title }}</div>
          <div class="flex justify-between items-center">
            <div class="font-semibold text-base md:text-xl ">
              {{ slotProps.data.author }}
            </div>
            <!-- <span>
              <Button icon="pi pi-download" class="" />
            </span> -->
          </div>
        </div>
          <span :class="slotProps.data.lang ?'absolute md:top-60 md:right-2 bg-slate-100 p-1 rounded text-sm': 'hidden'">{{slotProps.data.lang}}</span>
        </div>
      </div>
    </template>
  </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { defineProps } from "vue";
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import router from "@/router";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

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

function gotoIdPage(id) {
    console.log(id);
}
</script>
