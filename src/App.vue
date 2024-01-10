<script setup>
import hero from './components/hero.vue';
import goal from './components/goal.vue';
import about from './components/about.vue';
import technologies from './components/technologies.vue';
import project from './components/project.vue';
import foot from './components/foot.vue';
</script>

<template>  
  <div class="fixed inset-0 overflow-auto transform-gpu bg-main-bg" v-lenis>
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

