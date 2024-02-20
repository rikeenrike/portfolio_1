<template>
  <section
    id="section3"
    class="select-none h-auto overflow-hidden flex flex-col items-center px-[12px] xl:px-[112px]"
  >
    <div class="flex flex-col leading-none my-10">
      <h1 class="flex font-black text-dark-brown text-clamptitle items-center">
        <div id="text">t</div>
        <div id="text">e</div>
        <div id="text">c</div>
        <div id="text">h</div>
        <div id="text">n</div>
        <div id="text">o</div>
        <div id="text">l</div>
        <div id="text">o</div>
        <div id="text">g</div>
        <div id="text">i</div>
        <div id="text">e</div>
        <div id="text">s</div>
      </h1>
      <h3
        id="subtext"
        class="font-black text-light-brown text-clampsub text-right -mt-1.5 mr-0 lg:mr-[3%]"
      >
        i touched so far...
      </h3>
    </div>
    <div class="flex flex-col items-center text-center mb-10">
      <h1 id="subtext" class="font-black text-dark-brown text-body2">
        Development :
      </h1>
      <div
        v-if="smallscreen"
        id="techwrapper"
        class="font-black text-light-brown text-body2 mb-10"
      >
        <ul class="techs">
          Java
        </ul>
        <ul class="techs">
          Python
        </ul>
        <ul class="techs">
          HTML
        </ul>
        <ul class="techs">
          CSS
        </ul>
        <ul class="techs">
          JavaScript
        </ul>
        <ul class="techs">
          Vue
        </ul>
        <ul class="techs">
          Lenis
        </ul>
        <ul class="techs">
          GSAP
        </ul>
        <ul class="techs">
          Tailwind CSS
        </ul>
      </div>
      <div v-else class="flex justify-center">
        <carousel1 />
      </div>
      <h1 id="subtext" class="font-black text-dark-brown text-body2">
        Softwares :
      </h1>
      <div
        v-if="smallscreen"
        id="techwrapper"
        class="font-black text-light-brown text-body2"
      >
        <ul class="techs">
          Vscode
        </ul>
        <ul class="techs">
          Netbeans
        </ul>
        <ul class="techs">
          Figma
        </ul>
        <ul class="techs">
          Xammp
        </ul>
      </div>
      <div v-else class="flex justify-center">
        <carousel2 />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import carousel1 from "./carousels/carousel1.vue";
import carousel2 from "./carousels/carousel2.vue";
import gsapAnimations from "/src/components/gsapAnimations.js";
import gsap from "gsap";

const smallscreen = ref(window.innerWidth < 1024);
const updateScreenSize = () => {
  smallscreen.value = window.innerWidth < 1024;
};

let ctx;

onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
  ctx = gsap.context(() => {
    gsapAnimations.methods.bgchange(["#background", "#mainnav"], "#section3", false, "top", "bottom");
    gsapAnimations.methods.nav(
      ["#buttonnav", "#paperplane", ".custom-cursor"],
      "#section3", false, "top", "bottom"
    );
    gsapAnimations.methods.texttowhite(["#text", "#subtext"], "#section3", false, "top", "bottom");
    gsapAnimations.methods.animateupSTAGGER(
      ["#text", ".techs", "#subtext"],
      "#section3", false, "top", "bottom"
    );
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
  ctx.kill();
});
</script>
