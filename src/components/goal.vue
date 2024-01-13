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
import { onMounted, onUnmounted} from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let ctx;

onMounted(() => {
    ctx = gsap.context(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(['body', '#paperplane','#mainnav'], {
    scrollTrigger: {
        trigger: '.goal',
        start: 'top center',
        end: 'bottom center',
        scrub: false,
        toggleActions: 'play reverse play reverse',
    },
    backgroundColor: '#262626', 
    color: '#FAFAF9',
    stroke: '#FAFAF9',
    duration: .5,
    });

    gsap.to('.goal',  {
    scrollTrigger: {
        trigger: '.goal',
        start: 'top center',
        end: 'bottom center',
        scrub: false,
        toggleActions: 'play reverse play reverse',
    },
    color: '#FAFAF9', 
    duration: .5,
    }); 

    gsap.to(['#buttonnav','.custom-cursor'],  {
        scrollTrigger: {
            trigger: '.goal',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
            toggleActions: 'play reverse play reverse',
        },
        backgroundColor: '#FAFAF9',
        color: '#262626',
        duration: .5,
    });
    
    gsap.from('.goal', {
        scrollTrigger:{
            trigger: '.goal',
            start: 'top center',
            end: 'bottom center',
            scrub: false,
        },
        y: 100,
        opacity: 0,
        duration: .5,
    });
    });

    
});

onUnmounted(() => {
    ctx.revert();
});

</script>