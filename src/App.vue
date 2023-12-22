<script setup lang="ts">
import Header from './components/molecules/Header.vue';
import Footer from './components/molecules/Footer.vue'

</script>

<template>
  <Header />
  <div class="">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
