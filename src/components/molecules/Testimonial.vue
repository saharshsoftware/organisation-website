<script setup lang="ts">
import CommonTestimonial from "../atoms/CommonTestimonial.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { useQuery } from "@tanstack/vue-query";
import { Autoplay } from "swiper"; // Import for module usage
import { getTestimonials } from "../../services/testimonial";
import { onMounted, ref } from "vue";
const trustedSection = ref<any>();
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      trustedSection?.value?.classList.add('animate__animated', 'animate__fadeInUp');
    } else {
      trustedSection?.value?.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });

  observer.observe(trustedSection?.value);
});


import "swiper/css";
import "swiper/css/pagination";
// more module style...

const modules = [Autoplay];

// Use useQuery hook
const {
  isFetching: isPending,
  error,
  data,
} = useQuery({
  queryKey: ["todos"],
  queryFn: () => getTestimonials({params: {populate: "*"}}),
});
</script>

<template>
  <div
  class="text-[#414562] text-center text-[25px] leading-[38px] font-normal relative"     ref="trustedSection"
  >
  Testimonials
</div>
  <div class="text-center" v-if="isPending">Loading...</div>
  <div class="text-center" v-else-if="error">{{ error.message }}</div>
  <template v-else>
    <swiper
    :loop="true"
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
    >
      <swiper-slide v-for="todo in data.data" :key="todo.id">
        <CommonTestimonial
          :author="todo.attributes.author"
          :content="todo.attributes.content"
          :image_url="todo.attributes.image.data.attributes.url"
        />
      </swiper-slide>
    </swiper>
  </template>
</template>

<style scoped></style>
