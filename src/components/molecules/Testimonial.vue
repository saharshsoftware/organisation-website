<script setup lang="ts">
import CommonTestimonial from "../atoms/CommonTestimonial.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { useQuery } from "@tanstack/vue-query";
import { Autoplay } from "swiper"; // Import for module usage
import { getTestimonials } from "../../services/testimonial";
import "swiper/css";
import "swiper/css/pagination";

import { onMounted, ref } from "vue";
const trustedSection = ref<any>();
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

const isVisibleRef = (selector: any) => {
  if (!selector) return false;
  let isVisible = false;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];

    const newVisibility = entry.isIntersecting;

    // Check if the visibility state has changed
    if (newVisibility !== isVisible) {
      isVisible = newVisibility;

      // Toggle the class based on the new visibility state
      if (isVisible) {
        selector?.classList?.add('animate__fadeInUp');
      } else {
        // Add a delay before removing the class
        setTimeout(() => {
          selector?.classList?.remove('animate__fadeInUp');
        }, 500); // Adjust the delay as needed
      }
    }
  }
  , {
    threshold: 1
  }
  );

  observer.observe(selector);
  return true;
};

onMounted(() => {
  isVisibleRef(trustedSection.value);
  // isVisibleRef(blogContent.value);
});


</script>

<template>
  <div
  class="text-[#414562] text-center text-[25px] leading-[38px] font-normal relative animate__animated"     ref="trustedSection"
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
