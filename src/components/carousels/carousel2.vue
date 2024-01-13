<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsapAnimations from '/src/components/gsapAnimations.js'
import gsap from 'gsap';
let ctx;

onMounted(()=>{
  ctx = gsap.context(()=>{
    gsapAnimations.methods.animateupSTAGGER(['#icons1'],'.logos2');
  });
});

onUnmounted(()=>{
  ctx.kill();
});

</script>



<template>
    <div class="logos2">
    <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon id="icons1" icon="devicon:vscode" width="250" class="vs" />
            <Icon id="icons1" icon="logos:figma" width="165" class="figma" />
            <Icon id="icons1" icon="logos:netbeans" width="235" class="netbeans" />
            <Icon id="icons1" icon="logos:xampp" width="250" class="xamp" />
            <Icon id="icons1" icon="skill-icons:premiere" width="250" class="pr" />
            <Icon id="icons1" icon="skill-icons:aftereffects" width="250" class="ae"/>  
        </div>       
    </div>
    <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon id="icons1" icon="devicon:vscode" width="250" class="vs" />
            <Icon id="icons1" icon="logos:figma" width="165" class="figma" />
            <Icon id="icons1" icon="logos:netbeans" width="235" class="netbeans" />
            <Icon id="icons1" icon="logos:xampp" width="250" class="xamp" />
            <Icon id="icons1" icon="skill-icons:premiere" width="250" class="pr" />
            <Icon id="icons1" icon="skill-icons:aftereffects" width="250" class="ae"/>
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
  transform: translateX(100%);
}
}
.logos-slide {
display: inline-block;
animation: 35s slide infinite linear;
}
.logos2 {
overflow: hidden;
padding: 60px 0;
white-space: nowrap;
position: relative;
right: 25%;
clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);

}

.vs{
  filter: drop-shadow(0 0 1em #007acc);
}
.figma{
  filter: drop-shadow(0 0 1em #f24e1e);
}
.netbeans{
  filter: drop-shadow(0 0 1em #e93a1d);
}
.xamp{
  filter: drop-shadow(0 0 1em #fb7a24);
}
.pr{
  filter: drop-shadow(0 0 1em #00005b);
}
.ae{
  filter: drop-shadow(0 0 1em #00005b);
}
</style>