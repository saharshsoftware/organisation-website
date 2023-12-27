<script setup lang="ts">
import CommonTestimonial from "../atoms/CommonTestimonial.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper"; // Import for module usage

import "swiper/css";
import "swiper/css/pagination";
// more module style...

const modules = [Autoplay];
</script>

<template>
  <div
    class="text-[#414562] text-center font-['DmSans-Regular',_sans-serif] text-[25px] leading-[38px] font-normal relative"
  >
    Testimonials
  </div>
  <swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
  >
    <swiper-slide>
      <CommonTestimonial />
    </swiper-slide>
    <swiper-slide>
      <CommonTestimonial />
    </swiper-slide>
    <swiper-slide>
      <CommonTestimonial />
    </swiper-slide>
    <swiper-slide>
      <CommonTestimonial />
    </swiper-slide>
  </swiper>
</template>

<style scoped></style>
