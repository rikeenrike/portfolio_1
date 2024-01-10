<script setup>
import hero from './components/hero.vue';
import goal from './components/goal.vue';
import about from './components/about.vue';
import technologies from './components/technologies.vue';
import project from './components/project.vue';
import foot from './components/foot.vue';
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis();
lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template> 
  <div class="bg-main-bg">
    <div class="w-full h-screen ">
      <hero />
      <goal />
      <about />
      <technologies />
      <project />
      <foot />
    </div>
  </div>
</template>

