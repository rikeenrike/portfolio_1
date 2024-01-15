<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import moment from 'moment';
import gsap from 'gsap';
import gsapAnimations from './gsapAnimations';
const heart1 = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png";

const currentTime = ref('');
const updateTime = () => {
  currentTime.value = moment().format('hh:mm:ss A');
};

let ctx;

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
    ctx = gsap.context(() => {
        gsapAnimations.methods.animateup('#titlefoot', '#titlewrapperfoot');
        gsapAnimations.methods.animateupSTAGGER('#detes', '#titlewrapperfoot');
        gsap.to("#gradient", {
        backgroundPosition: "200% 0",
        ease: "none",
        duration: 3,
        repeat: -1
    });
    });
    
});

onUnmounted(() => {
    ctx.kill();
});
</script>

<template>
    <section id="section5" class="h-[80vh] flex flex-col px-[12px] xl:px-[112px]" >
      <div class="py-10 grid md:grid-cols-[1fr,.2fr]">
        <div id="detes" class="select-none mr-10">
            <h1 class="leading-none text-clamp2 font-black text-black tracking-tighter">
                This is 
                <span id="gradient" class="bg-gradient-to-r from-purple via-violet, via-pink to-purple bg-[length:200%_auto] bg-clip-text">
                    <span id="highlight" class="bg-inherit text-transparent">the part</span>
                </span>
                 where you get in 
                 <span id="gradient" class=" bg-gradient-to-l from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text">
                    <span id="highlight" class="pr-5 bg-inherit text-transparent">touch!</span>
                </span>
            </h1>
        </div>            
        <div class="flex flex-col text-clamp4 py-10 lg:py-0">
            <div id="detes">   
                <h1 class="font-black">location</h1>
                <p class="text-dark-brown text-clamp3 font-regular p-0 m-0">Davao Del Sur, Philippines</p>
                <p class="text-dark-brown text-clamp3 font-regular cursor-default ">{{ currentTime }}</p>
            </div>
            <div id="detes">
                <h1 class=" font-black">details</h1>
                <p class="text-dark-brown text-clamp3 font-regular">iskemberdu123@gmail.com</p>
                <p class="text-dark-brown text-clamp3 font-regular">+63 917 156 4324</p>
            </div>
            <div id="detes" class="flex flex-col ">
                <h1 class="font-black">socials</h1>
                <div class="flex items-center gap-2">
                    <Icon icon="devicon:github" width="34" />
                    <a class="text-dark-brown text-clamp3 font-regular cursor-none" href="https://github.com/rikeenrike" target="_blank">Github</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="devicon:linkedin" width="34" />
                    <a class="text-dark-brown text-clamp3 font-regular cursor-none" href="https://www.linkedin.com/in/ralphenrique/" target="_blank">Linkedin</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="skill-icons:instagram" width="34" />
                    <a class="text-dark-brown text-clamp3 font-regular cursor-none" href="https://www.instagram.com/rikeenrike/" target="_blank">Instagram</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="simple-icons:bento" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clamp3 font-regular cursor-none" href="https://bento.me/ralphenrique" target="_blank">Bento</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="logos:spotify-icon" width="34" />
                    <a class="text-dark-brown text-clamp3 font-regular cursor-none" href="https://open.spotify.com/user/217zscfniksqd6fsi4ue76wrq" target="_blank">Spotify</a>
                </div>

            </div>
        </div>
      </div>
    </section>
    <div class="text-[12px] select-none flex items-center justify-center gap-1 py-5 ">
        <div class="absolute flex justify-center overflow-hidden">
            <div class="h-[70px] pb-5 overflow-hidden">
                <img class="w-full h-full object-cover" src="\src\assets\signature.svg" alt="sig">
            </div>
        </div>
        <p>• This site is designed and coded with</p><img :src="heart1" alt="Heart on Fire" width="25" height="25" /> <p>by Ralph Enrique •</p> 
    </div>
</template>

