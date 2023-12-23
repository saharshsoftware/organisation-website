<script setup lang="ts">
import ContactForm from "../components/atoms/ContactForm.vue";
import HeroSectionSlot from "../components/atoms/HeroSectionSlot.vue";
</script>
<template>
  <HeroSectionSlot>
    <div class="text-white">Contact Us</div>
  </HeroSectionSlot>
  <div class="common-padding m-auto py-4">
    <ContactForm />
  </div>
</template>

<style scoped></style>
