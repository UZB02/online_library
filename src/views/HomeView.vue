<script setup>
import Section1 from "../components/Sections/Section1.vue"
import Section2 from "../components/Sections/Section2.vue"
import Section3 from "../components/Sections/Section3.vue"
import Section4 from "../components/Sections/Section4.vue"
import Footer from "../components/Footer/Main.vue"

</script>

<template>
<div class="main">
    <section class="w-full py-10 md:py-6">
        <Section1></Section1>
    </section>
    <section class="w-full py-10 md:py-6">
        <Section2></Section2>
    </section>
    <section class="w-full py-10 bg-green-100 md:py-6">
        <Section3></Section3>
    </section>
    <section class="w-full py-10 bg-yellow-100 md:py-6">
        <Section4></Section4>
    </section>
    <footer>
        <Footer></Footer>
    </footer>
</div>
</template>

<style scoped>
.main{
    width: 100%;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1188%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M1148.48 506.73a12.94 12.94 0 1 0-14.82 21.22z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M1199.83 51.18L1234.42 51.18L1234.42 83.63L1199.83 83.63z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M1335.12 313.01a35.09 35.09 0 1 0 55.44 43.03z' fill='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M515.3 338.95L545.5 338.95L545.5 393.3L515.3 393.3z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M414.75 519.26L451.44 519.26L451.44 525.02L414.75 525.02z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M260.28 422.13a16.06 16.06 0 1 0-31.43-6.63z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M1272.6 87.33 a8.56 8.56 0 1 0 17.12 0 a8.56 8.56 0 1 0 -17.12 0z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M729.33 450.79a12.19 12.19 0 1 0 2.55-24.25z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M1256.81 430.98 a3.64 3.64 0 1 0 7.28 0 a3.64 3.64 0 1 0 -7.28 0z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M398.78 374.51a0.19 0.19 0 1 0-0.12-0.37z' fill='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M903.13 25.85L940.96 25.85L940.96 55.71L903.13 55.71z' fill='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M1072.04 426.8a40.03 40.03 0 1 0-33.67-72.64z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M20.95 408.12L65.92 408.12L65.92 453.09L20.95 453.09z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M781.17 239.39a32.87 32.87 0 1 0-65.47 5.95z' stroke='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M1212.39 256.32a30.09 30.09 0 1 0 59.9 5.88z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M201.49 50.68L250.36 50.68L250.36 99.55L201.49 99.55z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M-34.73 47.31a51.83 51.83 0 1 0 79 67.12z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M116.03 460.89L166.95 460.89L166.95 461.25L116.03 461.25z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M1149.98 16.74a45.02 45.02 0 1 0 72.33 53.62z' stroke='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M1332 508.91 a7.08 7.08 0 1 0 14.16 0 a7.08 7.08 0 1 0 -14.16 0z' fill='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M1045.82 349.41a22.62 22.62 0 1 0-45.2 1.94z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M648.15 114.75L696.93 114.75L696.93 163.53L648.15 163.53z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M657.29 474.2a32.63 32.63 0 1 0-2.26 65.23z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M1424.18 161.3a32.26 32.26 0 1 0 17.75 62.03z' stroke='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M646.62 42.75L688.81 42.75L688.81 61.05L646.62 61.05z' fill='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M783.8 523.68L823.06 523.68L823.06 560.21L783.8 560.21z' stroke='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M29.78 18.51 a55.52 55.52 0 1 0 111.04 0 a55.52 55.52 0 1 0 -111.04 0z' fill='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M311.72 355.41a47.06 47.06 0 1 0-87.65-34.3z' stroke='rgba(3%2c 123%2c 11%2c 0.42)'%3e%3c/path%3e%3cpath d='M64.46 560.47a41.71 41.71 0 1 0-69.38-46.32z' stroke='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M681.47 171.12a0.78 0.78 0 1 0-0.41-1.5z' fill='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M454.37 535.51L474.32 535.51L474.32 555.46L454.37 555.46z' stroke='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3cpath d='M130.16 397.34a3.25 3.25 0 1 0 2.63-5.95z' fill='rgba(211%2c 183%2c 20%2c 0.45)'%3e%3c/path%3e%3cpath d='M626.87 437.79a14.49 14.49 0 1 0-11.99-26.38z' fill='rgba(226%2c 178%2c 0%2c 0.38)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1188'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
   position: sticky;
   background-repeat: no-repeat;
   z-index: 5;
}
</style>
