<template>
    <div class="custom-cursor" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);

const updateCursorPosition = (event) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

// Add event listeners to track cursor position when component is mounted
onMounted(() => {
  document.addEventListener('mousemove', updateCursorPosition);
});

// Remove event listeners when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', updateCursorPosition);
});
</script>


<style scoped>
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: #393A3D;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    cursor: none; 
}

</style>
