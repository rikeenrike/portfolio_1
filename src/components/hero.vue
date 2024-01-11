<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import logo from './logo.vue';

let tween;
const tl = gsap.timeline();

onMounted(() => {
  const navItems = document.querySelectorAll('#navmain');
  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      gsap.to(item, { color: '#4E4B4A', duration: 0.3, scale:1.05,  ease: 'power3.inOut'});
    });
    item.addEventListener('mouseout', () => {
      gsap.to(item, { color: '#D4D2D0', duration: 0.3, scale:1});
    });
  });

  tl.from('#navmain', { duration: 2, y: 300, opacity: 0, ease: 'power3.inOut', stagger: 0.2 });
});

onUnmounted(() => {
  if (tween) {
    tween.revert();
  }
});

</script>

<template>  
    <section class="h-screen grid items-center px-[12px] lg:grid-cols-[1fr,1fr] xl:px-[112px]">
        <div class="flex justify-center pr-0 pt-[20px] lg:pr-[30px]" >
            <logo />
        </div>
        <div class="flex flex-col lg:mt-28 h-4/5">
            <p class="text-clamp2 font-black text-dark-brown font-satoshi" >welcome.</p>
            <div class="flex-wrap lg:flex lg:w-[450px] xl:w-[600px] 2xl:w-auto">
                <div class="text-body2 text-light-gray font-bold lg:text-mod1 
                lg:flex flex-wrap xl:text-[42px] 2xl:text-heading-3 w-full  " >
                    <p class="mr-[20px]" id="navmain">about me</p>
                    <p class="mr-[20px]" id="navmain">my goal</p>
                    <p class="mr-[20px]" id="navmain">tech stack</p>
                    <p class="mr-[20px]" id="navmain">my projects</p>
                    <p class="mr-[20px]" id="navmain">contact</p>
                </div>
            </div>
            <div class="text-body-2 text-light-gray font-bold mt-auto text-right lg:mt-auto">
                <a>or explore by scrolling</a>
            </div>
        </div>
    </section>
    
</template>