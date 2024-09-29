<template>
  <div class="container mx-auto">
  <Carousel
    :value="products"
    :numVisible="6"
    :contentClass="products.length>=6 ? '' : ''"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
    class="w-[90vw]"
  >
    <template #item="slotProps">
      <div
        class="grid grid-rows-1 gap-3"
      >
        <div
        @click="gotoIdPage(slotProps.data.id)"
          class="card border cursor-pointer border-surface-200 dark:border-surface-700 rounded m-1 p-1"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full h-64 rounded"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">
              {{ slotProps.data.price }}
            </div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" />
            </span>
          </div>
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
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "412px",
    numVisible: 1,
    numScroll: 1,
  },
]);

function gotoIdPage(id) {
    console.log(id);
}
</script>
