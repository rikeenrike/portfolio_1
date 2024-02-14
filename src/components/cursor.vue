<template>
  <div
    v-if="smallscreen"
    class="custom-cursor"
    :style="{ top: cursorY + 'px', left: cursorX + 'px' }"
  ></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const smallscreen = ref(window.innerWidth > 1024);

const updateScreenSize = () => {
  smallscreen.value = window.innerWidth > 1024;
};

const cursorX = ref(0);
const cursorY = ref(0);

const updateCursorPosition = (event) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

onMounted(() => {
  document.addEventListener("mousemove", updateCursorPosition);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursorPosition);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #393a3d;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
}
</style>
