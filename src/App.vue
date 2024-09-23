<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Navbar/AppNavigation.vue"
</script>

<template>
  <header class="sticky top-0 z-[500]">
    <Nav></Nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
