<script setup lang="ts">
import { IMAGES } from "../../shared/images";
import { onMounted, ref } from "vue";
const trustedSection = ref<any>();


// const isVisibleRef = (selector: any) => {
//   if (!selector) return false;
//   let isVisible = false; // Track the current visibility state

//   const observer = new IntersectionObserver((entries) => {
//     const entry = entries[0];

//     const newVisibility = entry.isIntersecting ;

//     // Check if the visibility state has changed
//     if (newVisibility !== isVisible) {
//       isVisible = newVisibility;

//       // Toggle the class based on the new visibility state
//       if (isVisible) {
//         selector?.classList?.add('animate__fadeInDown');
//       } else {
//         // Add a delay before removing the class
//         setTimeout(() => {
//           selector?.classList?.remove('animate__fadeInDown');
//         }, 500); // Adjust the delay as needed
//       }
//     }
//   }, {
//     threshold: 0.5
//   });

//   observer.observe(selector);
//   return true;
// };


onMounted(() => {
    // isVisibleRef(trustedSection.value);
});


</script>
<template>
  <!-- Trusted Section -->

  <!-- ref="trustedSection" -->
  <!-- id="trust" -->
  <section
  class="bg-[#f2f2f2]  common-padding py-6 flex lg:flex-row flex-col items-center justify-between relative gap-8 mb-2 animate__animated"
    ref="trustedSection"
    >
    <div
    class="text-[#040f56] lg:text-left text-center text-[22px] leading-[26.4px] font-normal relative lg:w-[300px]"
    >
      Trusted by Executives &amp; Entrepreneurs from
    </div>
    <!-- ref="trustedSectionRight" -->
    <div
      class="gap-8 flex items-center justify-between md:flex-row flex-col relative flex-1 w-full"
    >
      <img
        class="shrink-0 w-[156px] h-[52px] relative"
        :src="IMAGES.image1"
        alt="f1"
      />
      <img
        class="shrink-0 w-[156px] h-[41px] relative"
        :src="IMAGES.image2"
        alt="f2"
      />
      <img
        class="shrink-0 w-[156px] h-[47px] relative"
        :src="IMAGES.image3"
        alt="f3"
      />
      <img class="shrink-0 w-16 h-16 relative" :src="IMAGES.image4" alt="f4" />
    </div>
  </section>

</template>

<style scoped></style>
