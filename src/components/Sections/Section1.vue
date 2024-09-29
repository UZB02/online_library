<template >
 
      <div class="container mx-auto flex items-center justify-center  p-4">
          <div  class="left   flex flex-col items-center gap-14 md:gap-20 w-full md:w-[60%] h-full justify-evenly">
            <h1 class="md:text-4xl text-3xl font-bold text-balance md:text-pretty md:text-center"><span class="text-yellow-400">"Boborahim Mashrab"</span> nomli husisiy maktab online kutibhonasi</h1>
            <div class="center flex items-center justify-around w-full md:w-[70%]">
                <div class="info flex flex-col items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" width="54" height="54" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
                    <h2 class="md:text-2xl">100 000+</h2>
                    <p>Kitob</p>
                </div>
                <div class="info flex flex-col items-center justify-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="green" viewBox="0 0 24 24"><path d="M2 12c.229-6.013 4.042-11 10-11s9.771 4.987 10 11h-2c-.256-4.918-3.539-8.031-8-8.022-4.461-.009-7.744 3.104-8 8.022h-2zm22 4.039c0-1.126-.913-2.039-2.039-2.039h-2.961v9h2.961c1.126 0 2.039-.913 2.039-2.039v-4.922zm-24 0c0-1.126.913-2.039 2.039-2.039h2.961v9h-2.961c-1.126 0-2.039-.913-2.039-2.039v-4.922z"/></svg>
                    <h2 class="md:text-2xl">100+</h2>
                    <p>Audio kitoblar</p>
                </div>
                <div class="info flex flex-col items-center justify-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="green" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg>
                    <h2 class="md:text-2xl">26+</h2>
                    <p>Jarayonda</p>
                </div>
            </div>
            <div class="bottom grid grid-cols-3 w-full md:w-[70%] gap-3">
                <div class="card  text-center cursor-pointer py-[5px] transition duration-75 hover:bg-green-400 bg-green-500 rounded-lg flex flex-col items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
                    <h1 class="text-sm md:text-lg">Kitoblarni o'qish</h1>
                </div>
                <div class="card  text-center cursor-pointer py-[5px] transition duration-75 hover:bg-green-400 bg-green-500 rounded-lg flex flex-col items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M2 12c.229-6.013 4.042-11 10-11s9.771 4.987 10 11h-2c-.256-4.918-3.539-8.031-8-8.022-4.461-.009-7.744 3.104-8 8.022h-2zm22 4.039c0-1.126-.913-2.039-2.039-2.039h-2.961v9h2.961c1.126 0 2.039-.913 2.039-2.039v-4.922zm-24 0c0-1.126.913-2.039 2.039-2.039h2.961v9h-2.961c-1.126 0-2.039-.913-2.039-2.039v-4.922z"/></svg>
                    <h1 class="text-sm md:text-lg">Audio kitoblar</h1>
                </div>
                <div class="card  text-center cursor-pointer py-[5px] transition duration-75 hover:bg-green-400 bg-green-500 rounded-lg flex flex-col items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg"  fill="white" width="30" height="30" viewBox="0 0 24 24"><path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z"/></svg>
                    <h1 class="text-sm md:text-lg">Ota onalar uchun</h1>
                </div>
            </div>
        </div>
        <div class="right hidden md:flex items-center justify-center w-[30%]">
            <img class="w-full" src="../../img/Education-removebg-preview.png" alt="">
        </div>
      </div>
</template>
<script setup>
import AnimateOnScroll from 'primevue/animateonscroll';
</script>
<style scoped>
    
</style>