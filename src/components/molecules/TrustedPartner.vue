<template>
  <!-- Trusted Section -->
  <section class="p-6 flex lg:flex-row flex-col items-center justify-between relative gap-8">
    <div
      class="text-[#040f56] text-left font-['Montserrat-Regular',_sans-serif] text-[22px] leading-[26.4px] font-normal relative w-[300px]">
      Trusted by Executives &amp; Entrepreneurs from
    </div>
    <div class="gap-8 flex items-center justify-between md:flex-row flex-col relative flex-1 w-full">
      <img class="shrink-0 w-[156px] h-[52px] relative" :src=IMAGES.image1 alt="f1" />
      <img class="shrink-0 w-[156px] h-[41px] relative" :src=IMAGES.image2 alt="f2" />
      <img class="shrink-0 w-[156px] h-[47px] relative" :src=IMAGES.image3 alt="f3" />
      <img class="shrink-0 w-16 h-16 relative" :src=IMAGES.image4 alt="f4" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { IMAGES } from "../../shared/images"
</script>

<style scoped></style>