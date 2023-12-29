<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BLOG_DATA } from "../../shared/constants";

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
    <div class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-2 animate__animated"
    ref="blogHeading"
    >
    <div
    class="text-[#0e163d] text-center  text-3xl leading-6 heading font-normal relative animate__animated"
    id="blog-heading"
    >
        Our Latest Blogs
      </div>
      <!-- <div
        class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden">
        <div
          class="text-[#0e163d] text-center  text-base leading-[22px] font-bold relative">
          More Blogs
        </div>
      </div> -->
    </div>

    <div class="flex lg:flex-row flex-col gap-5 items-center justify-start self-stretch shrink-0 relative "
    >
    <!-- ref="blogContent" -->
      <div v-for="(blog, index) in BLOG_DATA" :key="index"
        class="flex flex-col gap-2 items-start justify-start self-stretch flex-1 relative overflow-hidden">
        <img class="self-stretch shrink-0 h-80 relative rounded-lg" :src="blog.image" />
        <div class="py-1 px-2">
          <div
            class="text-[#0a102d] text-left  text-3xl relative self-stretch font-normal">
            {{ blog.title }}
          </div>
          <div
            class="text-[#6e6e6e] text-left  text-base leading-[30px] font-normal relative self-stretch">
            {{ blog.desc }}
          </div>
        </div>
        <div
          class="bg-[#237ac4] rounded-[30px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between shrink-0 h-[22px] absolute right-[1rem] top-[14.25px]">
          <div
            class="text-[#ffffff] text-left text-xs leading-3 font-normal uppercase relative">
            Engineering
          </div>
      </div>
    </div>
  </div>
</div></template>

<style scoped></style>
