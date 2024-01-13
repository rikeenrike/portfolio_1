<template> 
    <section id="section2">
    <div class=" flex justify-center items-center px-[12px] xl:px-[112px]">
        <div class="text-clamp1 font-black text-black font-satoshi my-[20%] py-10 leading-[1.25em]">
            <p class="goal">
                I learn and create inspiring digital experiences through  
                seamless development and design, fostering meaningful connections.
            </p>
        </div>
    </div>  
    </section>

</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import gsapAnimations from '/src/components/gsapAnimations.js'
let ctx;
onMounted(() => {
    ctx = gsap.context(() => {
    gsapAnimations.methods.bgchange(['#background','#mainnav'],'.goal');
    gsapAnimations.methods.texttowhite(['.goal'],'.goal');
    gsapAnimations.methods.nav(['#buttonnav','#paperplane','.custom-cursor'],'.goal');
    });
});
onUnmounted(() => {
    ctx.kill();
});

</script>