<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
    <slot></slot>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SwiperClass, { Pagination } from 'swiper'; // Import for module usage

import 'swiper/css';
import 'swiper/css/pagination';
// more module style...

const modules = [Pagination];
</script>
