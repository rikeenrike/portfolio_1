<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import logo from './logo.vue';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

const scrolltohere = (index) => {
  gsap.to(window, { duration: 1, scrollTo: { y: `#section${index + 1}`, offsetY: -300 },ease: 'power3.inOut' });
};


let ctx;
 
onMounted(() => {
  ctx = gsap.context(() => {
  const navItems = document.querySelectorAll('#navmain');
  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      gsap.to(item, { color: '#4E4B4A', duration: 0.2, scale:1.05,  ease: 'power3.inOut'});
    });
    item.addEventListener('mouseout', () => {
      gsap.to(item, { color: '#D4D2D0', duration: 0.2, scale:1});
    });
  });

  gsap.from('#logo', { duration: 2,  scale:1.5 , opacity: 0, ease: 'power3.inOut', stagger : 0.1});
  gsap.from('#greet', { duration: 1.5, y:-300, opacity: 0, ease: 'power3.inOut' });
  gsap.from('#navmain', { duration: 2, y: 300, opacity: 0, ease: 'power3.inOut', stagger: 0.2 });

  gsap.to('#bar', {
    left: '100%',
    duration: 1.5, 
    repeat: -1,
    ease: 'power4.inOut',
  });
  });

});

onUnmounted(() => {
  ctx.kill();
});
</script>

<template>  
    <section id="section0" class="select-none h-screen grid items-center px-[12px] lg:grid-cols-[1fr,1fr] xl:px-[112px]">
        <div class="flex justify-center pr-0 pt-[20px] lg:pr-[30px]" >
            <logo />
        </div>
        <div class="flex flex-col lg:mt-28 h-4/5">
            <p class="text-clamp2 font-black text-dark-brown font-satoshi" id="greet" >welcome.</p>
            <div class="flex-wrap lg:flex lg:w-[450px] xl:w-[600px] 2xl:w-auto">
                <div class="text-body2 text-light-gray font-bold lg:text-mod1 
                lg:flex flex-wrap xl:text-[42px] 2xl:text-heading-3 w-full  " >
                    <p @click="scrolltohere(0)" class="mr-[20px]" id="navmain">about me</p>
                    <p @click="scrolltohere(1)" class="mr-[20px]" id="navmain">my goal</p>
                    <p @click="scrolltohere(2)" class="mr-[20px]" id="navmain">tech stack</p>
                    <p @click="scrolltohere(3)" class="mr-[20px]" id="navmain">my projects</p>
                    <p @click="scrolltohere(4)" class="mr-[20px]" id="navmain">contact</p>
                </div>
            </div>
            <div class="flex ml-auto space-x-1 text-body-2 text-light-gray font-bold mt-auto  lg:mt-auto">
              <div class="w-[50px] relative overflow-hidden">
                <div id="bar" class="h-[70%] border-b-4 border-black relative left-[-100%]"></div>
              </div>
                <p>or explore by scrolling</p>
            </div>
        </div>
    </section>   
</template>