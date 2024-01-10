<template>
      <div class="logos">
      <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon icon="skill-icons:java-light" width="250" class="java"/>  
            <Icon icon="logos:python" width="250" class="python" />
            <Icon icon="skill-icons:javascript" width="250" class="js"/>
            <Icon icon="vscode-icons:file-type-html" width="250" class="html"/>
            <Icon icon="vscode-icons:file-type-css" width="250" class="css" />
            <Icon icon="vscode-icons:file-type-tailwind" width="250" class="tw" />
            <Icon icon="logos:vue" width="250" class="vue" />
            <Icon icon="logos:greensock-icon" width="250" class="gsap"/> 
        </div>       
      </div>
      <div class="logos-slide">
        <div class="flex items-center gap-[100px] mr-[100px]">
            <Icon icon="skill-icons:java-light" width="250" class="java"/>  
            <Icon icon="logos:python" width="250" class="python" />
            <Icon icon="skill-icons:javascript" width="250" class="js"/>
            <Icon icon="vscode-icons:file-type-html" width="250" class="html"/>
            <Icon icon="vscode-icons:file-type-css" width="250" class="css" />
            <Icon icon="vscode-icons:file-type-tailwind" width="250" class="tw" />
            <Icon icon="logos:vue" width="250" class="vue" />
            <Icon icon="logos:greensock-icon" width="250" class="gsap"/> 
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
    transition:0.5s;
}
.js:hover{
    transform:scale(0.5);
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