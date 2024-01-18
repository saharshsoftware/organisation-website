<script setup lang="ts">
import Header from './components/molecules/Header.vue';
import Footer from './components/molecules/Footer.vue'

</script>

<template>
  <div class="flex flex-col min-h-screen">
      <Header />
      <div class="flex-1">
        <RouterView />
      </div>
      <Footer />
    </div>
</template>

<style scoped></style>
