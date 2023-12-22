<script setup lang="ts">
import Header from './components/molecules/Header.vue';
import HeroSection from './components/molecules/HeroSection.vue';
import Footer from './components/molecules/Footer.vue'
import OurBlogs from './components/molecules/OurBlogs.vue'
import JoinTeam from './components/molecules/JoinTeam.vue';
</script>

<template>
  <Header />
  <HeroSection />
  <JoinTeam />
  <OurBlogs />
    <div class="w-4/5 m-auto">
      <RouterView />
    </div>
  <Footer />
</template>

<style scoped>

</style>
