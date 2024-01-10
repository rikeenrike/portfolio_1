<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';


const heart1 = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png";

const currentTime = ref('');

const updateTime = () => {
  currentTime.value = moment().format('hh:mm:ss A');
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000); // Update every second
});
</script>

<template>
    <section class=" h-screen  flex flex-col px-[12px] xl:px-[112px]" >
        <div class="flex flex-col items-center">   
            <h1 class="font-satoshi font-black text-dark-brown text-clamptitle items-center">contact.</h1>       
        </div>
      <div class=" grid md:grid-cols-[1fr,.8fr]">
        <div class=" mr-10 ">
            <h1 class="text-clamp6 font-bold text-dark-brown">This is the part where you get in touch and we make amazing things happen!</h1>
        </div>            
        <div class="flex flex-col   font-satoshi text-clamp3 py-10 lg:py-0">
            <div>   
                <h1 class="text-dark-brown font-black">location</h1>
                <a class="text-dark-brown text-clampsub font-regular cursor-pointer" href="https://www.google.com/maps/@7.0700401,125.6094454,13.5z?entry=ttu"
                target="_blank">Davao Del Sur, Philippines</a>
                <p class="text-dark-brown text-clampsub font-regular cursor-default ">{{ currentTime }}</p>
            </div>
            <div>
                <h1 class="text-dark-brown font-black">detes</h1>
                <p class="text-dark-brown text-clampsub font-regular">enriqueralph229@gmail.com</p>
                <p class="text-dark-brown text-clampsub font-regular">+639 77 123 4567</p>
            </div>
            <div class="flex flex-col">
                <h1 class="text-dark-brown font-black">socials</h1>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:github" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clampsub font-regular" href="https://github.com/rikeenrike" target="_blank">Github</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:linkedin" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clampsub font-regular" href="https://www.linkedin.com/in/ralphenrique/" target="_blank">Linkedin</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:instagram" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clampsub font-regular" href="https://www.instagram.com/rikeenrike/" target="_blank">Instagram</a>
                </div>

                <div class="flex items-center gap-2">
                    <Icon icon="simple-icons:bento" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clampsub font-regular" href="https://bento.me/ralphenrique" target="_blank">Bento</a>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:spotify" color="#393a3d" width="34" />
                    <a class="text-dark-brown text-clampsub font-regular" href="https://open.spotify.com/user/217zscfniksqd6fsi4ue76wrq" target="_blank">Spotify</a>
                </div>
            </div>
        </div>
      </div>
    </section>
    <div class="flex items-center justify-center gap-1">
        <h1 class="font-satoshi">This site is designed and coded with</h1><img :src="heart1" alt="Heart on Fire" width="25" height="25" />
    </div>
</template>

