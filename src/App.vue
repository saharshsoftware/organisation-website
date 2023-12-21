<script setup lang="ts">
import Header from './components/molecules/Header.vue';
import HeroSection from './components/molecules/HeroSection.vue';
</script>

<template>
  <Header />
  <HeroSection />
    <div class="w-4/5 m-auto">
      <RouterView />
    </div>
</template>

<style scoped>

</style>
