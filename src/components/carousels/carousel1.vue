<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
  gsap.from('#icons', {
    scrollTrigger:{
        trigger: '.logos',
        start: 'top center',
        end: 'bottom center',
        scrub: false,
    },
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.2,
});
})

</script>


<template>
      <div class="logos">
      <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon id="icons" icon="skill-icons:java-light" width="250" class="java"/>  
            <Icon id="icons" icon="logos:python" width="250" class="python" />
            <Icon id="icons" icon="skill-icons:javascript" width="250" class="js"/>
            <Icon id="icons" icon="vscode-icons:file-type-html" width="250" class="html"/>
            <Icon id="icons" icon="vscode-icons:file-type-css" width="250" class="css" />
            <Icon id="icons" icon="vscode-icons:file-type-tailwind" width="250" class="tw" />
            <Icon id="icons" icon="logos:vue" width="250" class="vue" />
            <Icon id="icons" icon="logos:greensock-icon" width="250" class="gsap"/> 
        </div>       
      </div>
      <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon id="icons" icon="skill-icons:java-light" width="250" class="java"/>  
            <Icon id="icons" icon="logos:python" width="250" class="python" />
            <Icon id="icons" icon="skill-icons:javascript" width="250" class="js"/>
            <Icon id="icons" icon="vscode-icons:file-type-html" width="250" class="html"/>
            <Icon id="icons" icon="vscode-icons:file-type-css" width="250" class="css" />
            <Icon id="icons" icon="vscode-icons:file-type-tailwind" width="250" class="tw" />
            <Icon id="icons" icon="logos:vue" width="250" class="vue" />
            <Icon id="icons" icon="logos:greensock-icon" width="250" class="gsap"/> 
        </div>
      </div>
    </div>
</template>

<style scoped>

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.logos-slide {
  display: inline-block;
  animation: 35s slide infinite linear;
}
.logos {
  overflow: hidden;
  padding: 60px 0;
  white-space: nowrap;
  position: relative;
  width:35%;
}


.js{
    filter: drop-shadow(0 0 1em #f0db4f);

}
.java{
    filter: drop-shadow(0 0 1em #ffffff);
}
.tw{
    filter: drop-shadow(0 0 1em #44a8b3);
}
.gsap{
    filter: drop-shadow(0 0 1em #88ce02);
}
.html{
    filter: drop-shadow(0 0 1em #e34c26);
}
.css{
    filter: drop-shadow(0 0 1em #2965f1);
}
.vue{
    filter: drop-shadow(0 0 1em #41b883);
}
.python{
    filter: drop-shadow(0 0 1em #3776ab);
}

</style>