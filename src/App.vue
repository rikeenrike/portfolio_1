<script setup>
import hero from './components/hero.vue';
import goal from './components/goal.vue';
import about from './components/about.vue';
</script>

<template>  
  <div class="fixed inset-0 overflow-auto transform-gpu bg-main-bg" v-lenis>
    <div class="w-full h-screen">
      <hero />
      <goal />
      <about />
    </div>
  </div>
</template>

