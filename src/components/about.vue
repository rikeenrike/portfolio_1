<script setup>
const emoji_1 = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium-Light%20Skin%20Tone.png";
</script>

<template>
    <section>
    <div class="flex flex-col items-center justify-center font-satoshi font-black text-dark-brown text-clamptitle">
        <h1>about me.</h1>
    </div>
      <div class="h-auto grid px-[12px] md:grid-cols-[1fr,1fr] xl:px-[112px]">
        <div class="flex flex-col items-center justify-center h-fit my-10">
            <img class="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto" src="\src\assets\me.webp" alt="img">
        </div>
        <div class="ml-0 md:my-10 md:ml-10">
            <div class="flex flex-row items-center mb-[5%]">
                <h1 class="font-satoshi font-black text-light-brown text-clamp4">sul sul!</h1>
                <img class="w-[50px] h-[50px]" :src="emoji_1"/>
            </div>
        <div class="flex flex-col gap-y-10 font-satoshi font-bold text-black text-clamp3 ">
          <p>
            I'm Ralph Enrique, a 20-year-old 2nd-year Information Technology student in Davao City, 
            Philippines. Currently immersed in web development, UI/UX design, and programming, with a 
            focus on front-end development.
          </p>
          <p>
            Beyond the digital realm, I'm a passionate cinematographer, drawing inspiration from my 
            older brother and cinematic maestros like Christopher Nolan. Excited about merging technology 
            and storytelling. 
          </p>
          <p>
            I'm on a journey to master the art of creating captivating digital experiences.
          </p>
          </div>
        </div>
        
      </div>
    </section>
</template>
