<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import carousel1 from './carousels/carousel1.vue'
const smallscreen = ref(window.innerWidth < 1024);
const updateScreenSize = () => {
  smallscreen.value = window.innerWidth < 1024;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<template>
    <section class="bg-dark h-auto overflow-hidden flex flex-col items-center px-[12px] xl:px-[112px]">
        <div class="flex flex-col leading-none my-10">
            <h1 class="font-satoshi font-black text-dark-brown text-clamptitle items-center">technologies.</h1>
            <h3 class="font-satoshi font-black text-light-brown text-clampsub text-right -mt-1.5 mr-0 lg:mr-[7%] "> i touch so far...</h3>
        </div>
        <div class="flex flex-col items-center text-center mb-10">
            <h1 class="font-satoshi font-black text-main-bg text-body2">Web Development.</h1>
            <div v-if="smallscreen" class="font-satoshi font-black text-light-brown text-body2 mb-10">
                <ul>Java</ul>
                <ul>Python</ul>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>JavaScript</ul>
                <ul>Vue</ul>
                <ul>Lenis</ul>
                <ul>GSAP</ul>
                <ul>Tailwind CSS</ul>
            </div>
            <div v-else class="flex justify-center px-[50%]">
                <carousel1/>
            </div>
            <div></div>
            <h1 class="font-satoshi font-black text-main-bg text-body2">Softwares.</h1>
            <div v-if="smallscreen" class="font-satoshi font-black text-light-brown text-body2">
                <ul>Vscode</ul>
                <ul>Netbeans</ul>
                <ul>Figma</ul>
                <ul>Xammp</ul>
            </div>
            <div v-else class="overflow-hidden">
                <div class="flex gap-40 m-10">
                    <Icon icon="devicon:vscode" width="250" class="vs" />
                    <Icon icon="logos:figma" width="165" class="figma" />
                    <Icon icon="logos:netbeans" width="235" class="netbeans" />
                    <Icon icon="logos:xampp" width="250" class="xamp" />
                    <Icon icon="skill-icons:premiere" width="250" class="pr" />
                    <Icon icon="skill-icons:aftereffects" width="250" class="ae"/>
                </div>
            </div>
        </div>

    </section>
</template>

