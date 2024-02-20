<template>
  <div
    v-if="smallscreen"
    class="custom-cursor fixed w-[20px] h-[20px] bg-black rounded-[50%] pointer-events-none z-[20]"
  ></div>
  <div
    v-if="smallscreen"
    class="hand fixed w-[130px] h-[130px] flex items-center justify-center rotate-[-25deg] pointer-events-none opacity-0 z-[20]"
  >
    <Icon
      icon="fluent:hand-wave-24-regular"
      width="96"
      height="96"
      class="text-main-bg wave"
    />
  </div>
  <div
    v-if="smallscreen"
    class="handpoint fixed w-[130px] h-[130px] flex items-center justify-center rotate-[-25deg] pointer-events-none opacity-0 z-[20]"
  >
    <Icon
      icon="akar-icons:pointer-hand"
      width="96"
      height="96"
      class="text-main-bg point"
    />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";
const smallscreen = ref(window.innerWidth > 1024);

const updateScreenSize = () => {
  smallscreen.value = window.innerWidth > 1024;
};

const cursorX = ref(0);
const cursorY = ref(0);
onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    cursorX.value = e.clientX;
    cursorY.value = e.clientY;

    gsap.to(".custom-cursor,.hand,.handpoint ", 0.3, {
      x: e.clientX,
      y: e.clientY,
    });
  });

  helcontainer.addEventListener("mouseenter", () => {
    gsap.to(".custom-cursor", 0.2, {
      scale: 7,
    });
    gsap.to(".hand", 0.2, {
      scale: 1,
      opacity: 1,
      top: "-55px",
      left: "-55px",
      rotate: 0,
    });

    gsap.from(".wave", 0.2, {
      delay: 0.1, // Add delay here
      scale: 0,
      rotate: -35,
    });

    gsap.to(".wave", 0.2, {
      delay: 0.1, // Add delay here
      scale: 1,
      rotate: 0,
    });
  });

  helcontainer.addEventListener("mousemove", () => {
    gsap.to(".hand", 0.2, {
      x: cursorX.value,
      y: cursorY.value,
    });
  });

  helcontainer.addEventListener("mouseleave", () => {
    gsap.to(".custom-cursor", 0.2, {
      scale: 1,
    });

    gsap.to(".hand", 0.2, {
      scale: 0,
      opacity: 0,
    });

    gsap.to(".wave", 0.2, {
      scale: 0,
      rotate: -35,
    });
  });

  downarrow.addEventListener("mouseenter", () => {
    gsap.to(".custom-cursor", 0.2, {
      scale: 7,
    });
    gsap.to(".handpoint", 0.2, {
      scale: 1,
      opacity: 1,
      top: "-55px",
      left: "-55px",
      rotate: 0,
    });

    gsap.from(".point", 0.2, {
      delay: 0.1, // Add delay here
      scale: 0,
      rotate: 0,
    });

    gsap.to(".point", 0.2, {
      delay: 0.1, // Add delay here
      scale: 1,
      rotate: 180,
    });
  });

  downarrow.addEventListener("mousemove", () => {
    gsap.to(".handpoint", 0.2, {
      x: cursorX.value,
      y: cursorY.value,
    });
  });

  downarrow.addEventListener("mouseleave", () => {
    gsap.to(".custom-cursor", 0.2, {
      scale: 1,
    });
    gsap.to(".handpoint", 0.2, {
      scale: 0,
      opacity: 0,
      top: "-55px",
      left: "-55px",
    });

    gsap.from(".point", 0.2, {
      delay: 0.1, // Add delay here
      scale: 0,
      rotate: 180,
    });

    gsap.to(".point", 0.2, {
      delay: 0.1, // Add delay here
      scale: 1,
      rotate: 0,
    });
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursorPosition);
});
</script>
