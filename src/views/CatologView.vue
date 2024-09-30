<template>
    <div class="top w-full bg-slate-200">
        <div class="container md:h-[30vh] py-8 mx-auto flex items-center justify-center">
            <span class="w-[80%]">
                <h1 class="text-2xl md:text-4xl text-green-500 font-bold">Kutibxona</h1>
                <p class="text-slate-500 text-sm">BMLibrary.uz kutubxonasiga xush kelibsiz</p>
            </span>
        </div>
    </div>
    <section>
        <div class="container mx-auto flex flex-col gap-7  justify-center">
            <SpeciesCards />
        </div>
    </section>
</template>
<script setup>
import SpeciesCards from '../components/Catalog/SpeciesCard.vue'
</script>
<style scoped>

</style>