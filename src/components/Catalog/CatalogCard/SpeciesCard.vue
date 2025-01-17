<template>
  <div class="flex w-full items-center flex-col gap-2 py-5">
    <h1 class="text-xl  md:w-[80%] md:text-2xl">Mashhur janrlar</h1>
   <div class="grid xs:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
     <div v-for="item in data" @click="gotoPage(item.id)" class="card  rounded p-4 flex gap-2 cursor-pointer shadow">
      <div>
        <img
          class="w-20 md:w-24"
          :src="item.img"
          alt="Image"
        />
      </div>
      <div class="flex flex-col items-center justify-center gap-3">
        <h1 class="md:text-xl font-bold">{{item.name}}</h1>
        <div class="flex flex-col items-center justify-center gap-2">
          <span class="flex w-full items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              fill="grey"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"
              />
            </svg>
            <h3 class="text-sm">{{ item.books }} Kitob</h3>
          </span>
          <span class="flex items-center justify-center gap-2">
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
            <h3 class="text-sm">{{ item.audiobooks }} Audiokitob</h3>
          </span>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";

const data=ref([])

function getCategories(){
  axios.get("/api/categories")
  .then((response) => {
    data.value = response.data;
    console.log(response.data);
  }).catch((err)=>{
    console.log(err);
  });
}
getCategories()


function gotoPage(id){
    router.push(`/catalog/${id}`)
}
</script>
<style scoped></style>
