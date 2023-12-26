<template>
  <div ref="cursor" class="cursor-container">
  </div>
</template>

<script setup lang="ts">
import { document } from 'postcss';
import { ref, onMounted, onUnmounted } from 'vue';

const cursor = ref();
let requestAnimationFrameId: number;

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  handleMouseMove(); // Initial update
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  cancelAnimationFrame(requestAnimationFrameId);
});

const handleMouseMove = () => {
  updateCursorPosition();
  requestAnimationFrameId = requestAnimationFrame(handleMouseMove);
};

const updateCursorPosition = () => {
  if ((document)?.querySelector('body')) {
    const { clientX=0, clientY=0 } = (document)?.querySelector('body')?.getBoundingClientRect();
    console.log(clientX, clientY);
    
    cursor.value.style.left = clientX + 'px';
    cursor.value.style.top = clientY + 'px';
  }
};
</script>

<style scoped>
/* ... (cursor styles here) */
</style>
