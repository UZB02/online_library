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
          class="card relative flex flex-col gap-2 border cursor-pointer border-surface-200 dark:border-surface-700 rounded m-1 p-1"
        >
          <div class="">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full h-52 md:h-64 rounded"
              />
            </div>
          </div>
          <div class="font-medium uppercase">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="font-semibold text-base md:text-xl">
              {{ slotProps.data.autor }}
            </div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="" />
            </span>
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
