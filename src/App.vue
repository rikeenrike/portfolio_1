<script setup>
import WelcomePAGE from './components/WelcomePAGE.vue'
import MygoalPAGE from './components/MygoalPAGE.vue'
</script>

<template>  
    <div class="fixed inset-0 overflow-auto transform-gpu bg-main-bg" v-lenis>
      <div class="w-full h-auto">
        <WelcomePAGE />
        <MygoalPAGE />
      </div>
    </div>
</template>


