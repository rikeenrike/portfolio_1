<script setup>
import hero2 from "./components/hero2.vue";
import goal from "./components/goal.vue";
import about from "./components/about.vue";
import technologies from "./components/technologies.vue";
import project from "./components/project.vue";
import foot from "./components/foot.vue";
import navi from "./components/navi.vue";
import Lenis from "@studio-freight/lenis";
import cursor from "./components/cursor.vue";
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.from("#nav", {
    scrollTrigger: {
      trigger: "#aboutt",
      start: "top center",
      end: "center center",
      scrub: false,
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    duration: 1.5,
    ease: "power4.inOut",
    y: -500,
  });
  gsap.to("#hero", {
    scrollTrigger: {
      trigger: ".thisbg",
      start: "-=20% 80%",
      end: "30% 80%",
      scrub: true,
      toggleActions: "play none none reverse",
    },
    y: "30%",
  });
  gsap.to(".preloader", 1, {
    delay: 2,
    opacity: 0,
    ease: "power4.inOut",

    onComplete: function () {
      document.querySelector(".preloader").style.display = "none";
    },
  });
  gsap.from("#hello,.nav, #section2", 1, {
    delay: 2.1,
    y: "20%",
    opacity: 0,
    scale: 0.95,
    ease: "power3.inOut",
    stagger: 0.03,
  });
});

onUnmounted(() => {
  ctx.kill();
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
</script>

<template>
  <div class="preloader fixed h-screen w-screen flex justify-center items-center bg-main-bg z-[1]">
    <div class="words text-dark-brown text-mod3 font-bold text-center">
      <p>Folio @2024</p>
      <span class="flex gap-1">
        <p class="text-[12px]">Powered by Vercel</p>
        <Icon icon="devicon:vercel" width="12px" height="15px" />
      </span>
    </div>
  </div>
  <!-- <div class=" fixed w-screen h-screen z-50">
    <svg width="100%" height="100%" opacity=".2">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#grainy)"></rect>
    </svg>
  </div> -->
  <div id="background" class="z-[-1] fixed bg-main-bg w-screen h-screen">
    <div class="flex items-center justify-center mt-10">
      <img id="hello" src="/src/assets/shape.svg" alt="Shape" />
    </div>
  </div>
  <cursor />
  <navi id="nav" />
  <hero2 id="hero" />
  <goal class="yawa" />
  <about id="aboutt" />
  <technologies />
  <project />
  <foot />
</template>
