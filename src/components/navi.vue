<template>
    <div class="fixed z-10 bg-main-bg">
      <div id="mainnav" class="h-[60px]  px-[12px] xl:px-[40px]  xl:h-[60px] w-screen  flex items-center justify-between">
      <div class="flex items-center">
        <svg @click="scrolltohere(-1)" xmlns="http://www.w3.org/2000/svg" width="47" height="30" viewBox="0 0 47 54" fill="none">
          <path id="paperplane" d="M23.179 2.21749L44.1222 51.9576L23.179 42.6313L2.23584 51.9576L23.179 2.21749Z" stroke="#393A3D" stroke-width="3.92685" stroke-linecap="round" stroke-linejoin="round"/>
          <path id="paperplane" d="M23.1798 42.795V2.21754" stroke="#393A3D" stroke-width="3.92685" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="flex items-center space-x-2 ">
        <span v-if="bigscreen" class="space-x-2">
            <a id="navs" @click="scrolltohere(0)" class="text-bold hover:font-bold duration-500">about me</a>
            <a id="navs" @click="scrolltohere(2)" class=" text-bold hover:font-bold duration-500">tech stack</a>
            <a id="navs" @click="scrolltohere(3)" class=" text-bold hover:font-bold duration-500">projects</a>
        </span>
            <button id="buttonnav" @click="scrolltohere(4)" class="cursor-none px-5 py-1 rounded-2xl text-white bg-black">Let's chat.</button>
      </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import logo from './logo.vue';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

const scrolltohere = (index) => {
  if (index === -1) {
    gsap.to(window, { duration: 3, scrollTo: { y: `#section0` },ease: 'power3.inOut' });
    return;
  }
  gsap.to(window, { duration: 3, scrollTo: { y: `#section${index + 1}`, offsetY: -300 },ease: 'power3.inOut' });

};

const bigscreen = ref(window.innerWidth > 1024);

const updateScreenSize = () => {
  bigscreen.value = window.innerWidth > 1024;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>