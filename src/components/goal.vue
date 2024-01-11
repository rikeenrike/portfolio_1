<template>  
    <div class=" flex justify-center items-center px-[12px] xl:px-[112px]">
        <div class="text-clamp1 font-black text-black font-satoshi my-[20%] py-10 leading-[1.25em]">
            <p class="goal">
                I learn and create inspiring digital experiences through  
                seamless development and design, fostering meaningful connections.
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.from('.goal', {
        scrollTrigger:{
            trigger: '.goal',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
        },
        opacity: 0,
        duration: 1,
    });
});

</script>