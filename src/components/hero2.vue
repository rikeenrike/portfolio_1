<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

let words = ["hello", "こんにちは", "안녕하세요", "Xin chào", "你好"];
let ctx;
const scrolltohere = (index) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#section${index + 1}`, offsetY: -300 },
    ease: "power3.inOut",
  });
};

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.to("#bar", {
      left: "100%",
      duration: 1.5,
      repeat: -1,
      ease: "power4.inOut",
    });

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
        gsap.to(item, { color: "#4E4B4A", duration: 0.2, scale: 1 });
      });
    });

    let words = ["hello", "こんにちは", "안녕하세요", "Xin chào", "你好"];
    const tl = gsap.timeline({ repeat: -1 });
    words.forEach((word, index) => {
      tl.to("#hello p", {
        delay: 2.2,
        y: "-=100%",
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.2,
      });
    });
    gsap.to("#hello", {
      scrollTrigger: {
        trigger: "#section2",
        start: "-=20% center",
        end: "top center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 1,
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
    class="select-none h-[80vh] grid items-center px-[12px] md:grid-rows-[.2fr,1fr,.5fr] xl:px-[112px]"
  >
    <div
      class="hidden sm:text-dark-brown text-mod3 font-bold sm:flex items-center justify-center 2xl:w-full"
    >
      <div class="flex items-center mr-auto">
        <img src="\src\assets\1.png" alt="1" class="w-[16px] h-[16px]" />
        <img src="\src\assets\2.png" alt="2" class="w-[16px] h-[16px]" />
        <img src="\src\assets\3.png" alt="3" class="w-[16px] h-[16px]" />
      </div>
      <p @click="scrolltohere(1)" class="mr-[20px]" id="navmain">my goal</p>
      <p @click="scrolltohere(2)" class="mr-[20px]" id="navmain">tech stack</p>
      <p @click="scrolltohere(4)" class="mr-[20px]" id="navmain">contact</p>
    </div>

    <div class="h-full w-full flex items-center justify-center">
      <div
        id="helcontainer"
        class="z-20 flex flex-col items-center h-[70%] w-fit"
      >
        <div
          id="hello"
          class="text-center w-fit h-clamp8 overflow-auto font-black text-clamptitle text-black"
        >
          <p class="leading-[1.15]" v-for="(word, index) in words" :key="index">
            {{ word }}
          </p>
          <p class="leading-[1.15]">{{ words[0] }}</p>
        </div>
        <p
          id="hello"
          class="leading-1 z-20 font-bold text-clamp4 text-light-brown text-center"
        >
          Welcome, to my digital universe expierence.
        </p>
      </div>
    </div>
  </section>
</template>
