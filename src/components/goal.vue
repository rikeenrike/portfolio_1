<template> 
    <section id="section2">
    <div class=" flex justify-center items-center px-[12px] xl:px-[112px]">
        <div class="text-clamp1 font-black text-black my-[20%] py-10 leading-[1.25em]">
            <h1 id="goal">
                I learn and create
                <span id="gradient" class="bg-gradient-to-r from-purple via-violet, via-pink to-purple bg-[length:200%_auto] bg-clip-text">
                    <span id="highlight" class="bg-inherit text-transparent">inspiring</span>
                </span>
                digital experiences through
                <span id="gradient" class="bg-gradient-to-l from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text">
                  <span id="highlight" class="bg-inherit text-transparent">seamless development</span>  
                </span>
                and
                <span id="gradient" class="bg-gradient-to-r from-emerald-500 via-teal-500, via-cyan-500 to-emerald-500 bg-[length:200%_auto] bg-clip-text">
                    <span id="highlight" class="bg-inherit text-transparent">design</span> 
                </span>
                , fostering meaningful
                connections.
            </h1>
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
    gsapAnimations.methods.bgchange(['#background','#mainnav'],'#section2');
    gsapAnimations.methods.texttowhite(['#goal'],'#section2');
    gsapAnimations.methods.nav(['#buttonnav','#paperplane','.custom-cursor'],'#section2');

    gsap.to("#gradient", {
        backgroundPosition: "200% 0",
        ease: "none",
        duration: 3,
        repeat: -1
    });
    
    });
});
onUnmounted(() => {
    ctx.kill();
});

</script>