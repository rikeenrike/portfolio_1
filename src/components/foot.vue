<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import moment from "moment";
import gsap from "gsap";
import gsapAnimations from "./gsapAnimations";
const heart1 =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png";

const currentTime = ref("");
const updateTime = () => {
  currentTime.value = moment().format("hh:mm:ss A");
};

let ctx;

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
  ctx = gsap.context(() => {
    gsapAnimations.methods.animateup("#titlefoot", "#titlewrapperfoot");
    gsapAnimations.methods.animateupSTAGGER("#detes", "#titlewrapperfoot");
    gsap.to("#gradient", {
      backgroundPosition: "200% 0",
      ease: "none",
      duration: 3,
      repeat: -1,
    });
  });
});

onUnmounted(() => {
  ctx.kill();
});
</script>

<template>
  <section id="section5" class="cursor-none h-[80vh] flex flex-col px-[12px] xl:px-[112px]">
    <div class="py-10 grid md:grid-cols-[1fr,.2fr]">
      <div id="detes" class="select-none mr-10">
        <h1 class="leading-none text-clamp2 font-black text-black tracking-tighter">
          This is
          <span id="highlight" class="text-purple-900	">the part</span>
          where you get in
          <span id="highlight" class="pr-5 ">touch!</span>

        </h1>
      </div>
      <div class="flex flex-col text-clamp4 py-10 md:py-0">
        <div id="detes">
          <h1 class="font-black text-black">find me here</h1>
          <p class="text-dark-brown text-clamp3 font-regular p-0 m-0">
            Davao Del Sur, Philippines
          </p>
          <p class="text-dark-brown text-clamp3 font-regular cursor-none">
            PHT {{ currentTime }}
          </p>
        </div>
        <div id="detes">
          <h1 class="font-black text-black">also here</h1>
          <p class="text-dark-brown text-clamp3 font-regular  hover:underline">
            connect@rikeenrike.me
          </p>
          <div class="flex items-center gap-2">
            <Icon icon="devicon:linkedin" width="34" />
            <a class="text-dark-brown text-clamp3 font-regular cursor-none  hover:underline"
              href="https://www.linkedin.com/in/ralphenrique/" target="_blank">/in/ralphenrique</a>
          </div>
        </div>
        <div id="detes" class="flex flex-col">
          <div class="flex items-center gap-2">
            <Icon icon="devicon:github" width="34" />
            <a class="text-dark-brown text-clamp3 font-regular cursor-none hover:underline"
              href="https://github.com/rikeenrike" target="_blank">/rikeenrike</a>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="skill-icons:instagram" width="34" />
            <a class="text-dark-brown text-clamp3 font-regular cursor-none  hover:underline"
              href="https://www.instagram.com/rikeenrike/" target="_blank">/rikeenrike</a>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="simple-icons:bento" color="#393a3d" width="34" />
            <a class="text-dark-brown text-clamp3 font-regular cursor-none  hover:underline"
              href="https://bento.me/ralphenrique" target="_blank">/ralphenrique</a>
          </div>
          <div class="cursor-none">
            <h1 class="font-black text-black">a gift to you</h1>
            <iframe style="border-radius:12px; "
              src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator&theme=0"
              width="300px" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
          </div>

        </div>
      </div>
    </div>
  </section>
  <div class="text-[12px] select-none flex items-center justify-center gap-1 py-5">
    <div class="absolute flex justify-center overflow-hidden">
      <div class="h-[70px] pb-5 overflow-hidden">
        <img class="w-full h-full object-cover" src="\src\assets\signature.svg" alt="sig" />
      </div>
    </div>
    <p>• This site is designed and coded with</p>
    <img :src="heart1" alt="Heart on Fire" width="25" height="25" />
    <p>by Ralph Enrique •</p>
  </div>
</template>
