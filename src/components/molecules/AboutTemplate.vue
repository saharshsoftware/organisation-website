<script setup lang="ts">

import { onMounted, ref } from "vue";
const blogHeading = ref<any>();

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
  }, {
    threshold: 0.1
  });

  observer.observe(selector);
  return true;
};

onMounted(() => {
  isVisibleRef(blogHeading.value);
  // isVisibleRef(blogContent.value);
});
</script>

<template>
  <div class="flex flex-col gap-[50px] items-start justify-start relative common-padding py-6 auto bg-[#F2F7F9]" >
  <div
      class="text-[#0e163d] text-center  text-5xl leading-[54px] font-normal relative animate__animated"
      id="blog-heading"
      >
          Let Us Be Your Partners Preferred IT Partner
        </div>
  </div>
</template>

<style scoped>

</style>