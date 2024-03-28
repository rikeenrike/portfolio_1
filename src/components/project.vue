<template>
  <section id="section4" class="select-none h-fit overflow-hidden flex flex-col items-center px-[12px] xl:px-[112px]">
    <div id="titlewrapper" class="flex flex-col leading-none my-10">
      <h3 id="projecttitle" class="font-black text-light-brown text-clampsub text-left ml-0 lg:ml-[1%]">
        school
      </h3>
      <h1 id="projecttitle" class="font-black text-dark-brown text-clamptitle items-center -mt-[5%]">
        project hub.
      </h1>
    </div>
    <div class="h-auto grid md:grid-cols-[1fr,1fr]">
      <div id="leftwingwrapper" class="mr-0 md:my-10 md:mr-10 h-fit">
        <div class="flex flex-row items-center pb-[10px] lg:gap-5">
          <div id="leftwing"></div>
          <a id="leftwing" class="font-black text-light-brown text-clamp4 cursor-none underline decoration-4"
            target="_blank" href="https://uiccafe.netlify.app/menu">UIC Cafe</a>
        </div>
        <div class="flex mb-[5%] gap-5">
          <div id="leftwing" class="flex items-center justify-center px-[15px] rounded-full border-neutral-700 border">
            <h1 class="text-center text-clamp5 font-bold text-light-brown">
              2023
            </h1>
          </div>
          <div id="leftwing" class="flex items-center justify-center px-[15px] rounded-full border-neutral-700 border">
            <h1 class="flex text-center text-clamp5 font-bold text-light-brown">
              Vue.js • PrimeVue • HTML • CSS
            </h1>
          </div>
          <div id="leftwing" class="flex items-center justify-center px-[15px] rounded-full border-neutral-700 border">
            <h1 class="flex text-center text-clamp5 font-bold text-light-brown">
              in development
            </h1>
          </div>
        </div>
        <div class="flex flex-col gap-y-10 font-bold text-black text-clamp3 lg:pr-5">
          <p id="leftwing">
            UIC Cafe is essentially an ordering system for the university
            personnel, they have the ability to order directly using the web
            application, track their orders, and see the latest items in the
            menu.
          </p>
          <p id="leftwing">
            Meanwhile, this system also includes the administrator, where the
            staff has the ability to add, edit, delete, and update items in
            their menu, just like any typical admin system they receive orders,
            monitor their stocks, etc.
          </p>
        </div>
      </div>
      <div id="imagewrapper" class="flex flex-col items-center justify-center h-fit my-10">
        <img id="images"
          class="aspect-rectangle h-auto w-full rounded-md object-cover object-center md:aspect-auto pb-10"
          src="\src\assets\image 300.svg" alt="img" />
        <img id="images"
          class="aspect-rectangle h-auto w-full rounded-md object-cover object-center md:aspect-auto pb-10"
          src="\src\assets\image 299.svg" alt="img" />
        <img id="images"
          class="aspect-rectangle h-auto w-full rounded-md object-cover object-center md:aspect-auto pb-10"
          src="\src\assets\image 298.svg" alt="img" />
        <img id="images"
          class="aspect-rectangle h-auto w-full rounded-md object-cover object-center md:aspect-auto pb-10"
          src="\src\assets\image 297.svg" alt="img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import gsapAnimations from "./gsapAnimations";

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    gsapAnimations.methods.animateup("#projecttitle", "#titlewrapper");
    gsapAnimations.methods.animateupSTAGGER(
      ["#leftwing", "#images"],
      "#leftwingwrapper"
    );
    if (window.innerWidth > 1024) {
      gsap.from("#imagewrapper", {
        scrollTrigger: {
          trigger: "#leftwingwrapper",
          start: "center center",
          end: "270% center",
          pin: true,
          scrub: false,
          toggleActions: "play none none none",
        },
      });
    }
  });
});

onUnmounted(() => {
  ctx.kill();
});
</script>
