<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const scrolltohere = (index) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#section${index + 1}`, offsetY: -300 },
    ease: "power3.inOut",
  });
};

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from("#navmain", {
      duration: 2,
      y: 300,
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.2,
      markers: true,
    });

    gsap.to("#bar", {
      left: "100%",
      duration: 1.5,
      repeat: -1,
      ease: "power4.inOut",
    });
  });
  let languages = [
    "こんにちは",
    "안녕하세요",
    "Xin chào",
    "bonjour",
    "ciao",
    "olá",
    "hello",
  ];
  let index = 0;

  function animateText() {
    gsap.to("#hello", {
      delay: 0.5,
      duration: 3,
      text: languages[index],
      ease: "power4.inOut",
      onComplete: function () {
        index = (index + 1) % languages.length; // Loop back to 0 when we've gone through all languages
        animateText(); // Call the function again to animate the next language
      },
    });
  }
  animateText(); // Start the animation
  const navItems = document.querySelectorAll("#navmain");
  navItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      gsap.to(item, {
        color: "#0E0E0C",
        duration: 0.2,
        scale: 1.05,
        ease: "power3.inOut",
      });
    });
    item.addEventListener("mouseout", () => {
      gsap.to(item, { color: "#D4D2D0", duration: 0.2, scale: 1 });
    });
  });
});

onUnmounted(() => {
  ctx.kill();
});
</script>

<template>
  <section
    id="section0"
    class="select-none h-svh grid items-center px-[12px] lg:grid-rows-[.2fr,1fr,.5fr] xl:px-[112px]"
  >
    <div
      class="hidden lg:text-light-gray text-body2 lg:flex justify-center 2xl:w-full"
    >
      <p @click="scrolltohere(0)" class="mr-[20px]" id="navmain">about me</p>
      <p @click="scrolltohere(1)" class="mr-[20px]" id="navmain">my goal</p>
      <p @click="scrolltohere(2)" class="mr-[20px]" id="navmain">tech stack</p>
      <p @click="scrolltohere(3)" class="mr-[20px]" id="navmain">my projects</p>
      <p @click="scrolltohere(4)" class="mr-[20px]" id="navmain">contact</p>
    </div>
    <div class="flex flew-row justify-center">
      <h1 id="hello" class="font-black text-clamptitle text-black">hello</h1>
      <h1 class="font-black text-clamptitle text-black">!</h1>
    </div>

    <div
      class="flex ml-auto space-x-1 text-body-2 text-light-gray font-bold mt-auto lg:mt-auto"
    >
      <div class="w-[50px] relative overflow-hidden">
        <div
          id="bar"
          class="h-[70%] border-b-4 border-black relative left-[-100%]"
        ></div>
      </div>
      <p>scroll down...</p>
    </div>
  </section>
</template>
