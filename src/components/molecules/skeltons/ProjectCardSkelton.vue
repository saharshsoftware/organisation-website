<script setup lang="ts"></script>
<template>
  <div v-for="index in 5" :key="index" class="w-full py-4 mb-4">
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-4/5"></div>
      <div class="skeleton h-4 w-1/5"></div>
    </div>
  </div>
</template>

<style scoped></style>
