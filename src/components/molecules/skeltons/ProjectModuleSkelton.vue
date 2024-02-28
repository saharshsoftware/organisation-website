<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex flex-col gap-4 w-full">
      <div class="skeleton h-4 w-1/2"></div>
      <div class="skeleton h-4 w-4/5"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-4/5"></div>
      <div class="skeleton h-4 w-1/2"></div>
    </div>
    <div v-for="index in 3" :key="index" class="w-full py-4 mb-4">
      <div class="flex flex-col gap-4 w-full">
        <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
        <div class="skeleton h-4 w-1/5"></div>
        <div class="skeleton h-4 w-4/5"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-4/5"></div>
        <div class="skeleton h-4 w-1/5"></div>
        <div class="skeleton h-4 w-20"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
