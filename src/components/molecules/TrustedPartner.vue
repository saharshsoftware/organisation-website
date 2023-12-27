<script setup lang="ts">
import { IMAGES } from "../../shared/images";
import { onMounted, ref, onUnmounted } from "vue";
const trustedSection = ref<any>();
const trustedSectionRight = ref<any>();

let observer: IntersectionObserver | null = null;

// onMounted(() => {

//   observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       trustedSection?.value?.classList.add('animate__animated', 'animate__fadeInUp');
//     } else {
//       trustedSection?.value?.classList.remove('animate__animated', 'animate__fadeInUp');
//     }
//   });

//   observer.observe(trustedSection?.value);
//   //   const observerRight = new IntersectionObserver((entries) => {
//   //   if (entries[0].isIntersecting) {
//   //     trustedSectionRight?.value?.classList.add('animate__animated', 'animate__fadeInUp');
//   //   } else {
//   //     trustedSectionRight?.value?.classList.remove('animate__animated', 'animate__fadeInUp');
//   //   }
//   // });

//   // observerRight.observe(trustedSectionRight?.value);
// });

// onUnmounted(() => {
//   // Disconnect the observer when the component is unmounted
//   if (observer) {
//     observer.disconnect();
//   }
// });

</script>
<template>
  <!-- Trusted Section -->
  <section
    class="bg-[#f2f2f2] common-padding py-6 flex lg:flex-row flex-col items-center justify-between relative gap-8 mb-2"
    ref="trustedSection"
    
    >
    <div
    class="text-[#040f56] text-left font-['Montserrat-Regular',_sans-serif] text-[22px] leading-[26.4px] font-normal relative w-[300px]"
    >
      Trusted by Executives &amp; Entrepreneurs from
    </div>
    <div
    ref="trustedSectionRight"
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
