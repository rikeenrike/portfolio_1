<script setup>
import hero from './components/hero.vue';
import goal from './components/goal.vue';
import about from './components/about.vue';
import technologies from './components/technologies.vue';
import project from './components/project.vue';
import foot from './components/foot.vue';
import navi from './components/navi.vue';
import Lenis from '@studio-freight/lenis'
import cursor from './components/cursor.vue';
import gsappractice from './components/gsappractice.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    gsap.from('#nav', {
        scrollTrigger:{
            trigger: '#hero',
            start: 'bottom center',
            end: 'center center',
            scrub: false,
            markers: true,
            toggleActions: 'play none none reverse',
        },
        opacity: 0,
        duration: 2,
        ease: "power4.inOut",
        y: -500
    });
});


const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


</script>

<template> 
  <div class="bg-main-bg">
    <div class="w-full h-screen ">
      <cursor />
      <navi class="fixed z-10" id="nav"/>
      <hero id="hero"/>
      <!-- <gsappractice/> -->
      <goal />
      <about />
      <technologies />
      <project />
      <foot />
    </div>
  </div>
</template>

