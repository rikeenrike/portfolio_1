<template>
    <section class="flex items-center justify-center h-screen w-screen">
        <div class="h-[100px] w-[100px] border bg-black opacity-1" id="box"></div>
        <div class="h-[100px] w-[100px] border bg-black opacity-1" id="box"></div>
        <div class="h-[100px] w-[100px] border bg-black opacity-1" id="box"></div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
    gsap.from('#box', {
        scrollTrigger:{
            trigger: '#box',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            markers: true,
        },
        x: 500,
        opacity: 0,
        duration: 2,
        delay: 0.5,
    });
});


onUnmounted(() => {
  tween.revert();
});


</script>