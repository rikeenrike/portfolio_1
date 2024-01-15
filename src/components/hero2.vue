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
        
    </section>   
</template>