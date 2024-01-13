<template>
    <section id="section1" class="select-none aboutsection">
    <div id="header" class="flex flex-col items-center justify-center font-satoshi font-black text-dark-brown text-clamptitle">
        <h1>about me.</h1>
    </div>
      <div class="h-fit grid px-[12px] md:grid-cols-[1fr,1fr] xl:px-[112px]">
        <div  class="flex flex-col items-center justify-center h-fit my-10">
            <img id="img" class="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto" src="\src\assets\me.webp" alt="image of pogi">
        </div>
        <div id="sulandesc" class="pl-0 md:py-10 md:pl-10">
            <div id="sulsul" class="flex flex-row items-center mb-[5%]">
                <h1 class="font-satoshi font-black text-light-brown text-clamp4">hello there!</h1>
                <img class="w-[50px] h-[50px]" :src="emoji_1" alt="emoji"/>
            </div>
        <div id="desc" class="flex flex-col gap-y-10 font-satoshi font-bold text-black text-clamp3 ">
          <p id="desc">
            I'm Ralph Enrique, a 20-year-old 2nd-year Information Technology student in Davao City, 
            Philippines. Currently immersed in web development, UI/UX design, and programming, with a 
            focus on front-end development.
          </p>
          <p id="desc">
            Beyond the digital realm, I'm a passionate cinematographer, drawing inspiration from my 
            older brother and cinematic maestros like Christopher Nolan. Excited about merging technology 
            and storytelling. 
          </p>
          <p id="desc">
            I'm on a journey to master the art of creating captivating digital experiences.
          </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
const emoji_1 = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium-Light%20Skin%20Tone.png";
import { onMounted, onUnmounted} from 'vue';
import gsap from 'gsap';
import gsapAnimations from './gsapAnimations';

let ctx;
  onMounted(() => {
    ctx = gsap.context(()=>{
    gsapAnimations.methods.animateup('#header', '.aboutsection'); 
    gsapAnimations.methods.animateup('#sulsul', '#header');
    gsapAnimations.methods.animateupSTAGGER('#desc', '#img');
    if (window.innerWidth > 1024) {
      gsap.from('#img', {
        scrollTrigger:{
          trigger: '#sulandesc',
          start: 'top 10%',
          end: 'bottom bottom',
          pin: true,
          scrub: false,
          toggleActions: 'play none none none',
        },
      })
    }
  });
  });
  onUnmounted(() => {
    ctx.kill();
  })
</script>