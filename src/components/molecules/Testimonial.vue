<script setup lang="ts">

// libs
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
// @ts-ignore
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// services
import { getTestimonials } from "../../services/testimonial";

// components
import CommonTestimonial from "../atoms/CommonTestimonial.vue";

const trustedSection = ref<any>();
const modules = [Autoplay];

const { isLoading, data: testimonialData } = useQuery({
  queryKey: ["testominials"],
  queryFn: () => getTestimonials({ params: { populate: "*" } }),
});

const isVisibleRef = (selector: any) => {
  if (!selector) return false;
  let isVisible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      const newVisibility = entry.isIntersecting;

      // Check if the visibility state has changed
      if (newVisibility !== isVisible) {
        isVisible = newVisibility;

        // Toggle the class based on the new visibility state
        if (isVisible) {
          selector?.classList?.add("animate__fadeInUp");
        } else {
          // Add a delay before removing the class
          setTimeout(() => {
            selector?.classList?.remove("animate__fadeInUp");
          }, 500); // Adjust the delay as needed
        }
      }
    },
    {
      threshold: 1,
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
  <div>
    <div
      class="text-[#414562] text-center text-2xl leading-10 font-normal relative animate__animated"
    >
      <span class="heading relative animate__animated" ref="trustedSection">
        Testimonials
      </span>
    </div>
    <template v-if="isLoading || !testimonialData?.data?.length">
      <div class="text-center" v-if="isLoading">Loading...</div>
    </template>
    <template v-else>
      <swiper
        :modules="modules"
        :loop="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
      >
        <swiper-slide v-for="todo in testimonialData?.data" :key="todo.id">
          <CommonTestimonial
            :author="todo?.attributes?.author"
            :content="todo?.attributes?.content"
            :image_url="todo?.attributes?.image?.data?.attributes?.url "
          />
        </swiper-slide>
      </swiper>
    </template>
  </div>
  <!-- </template> -->
</template>

<style scoped></style>
