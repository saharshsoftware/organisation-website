<script setup lang="ts">

// libs
import { onMounted, ref } from "vue";
// import { useQuery } from "@tanstack/vue-query";
// import { getHeroSectionRequest } from "../services/herosection";

// components
import OurBlogs from "../components/molecules/OurBlogs.vue";
import JoinTeam from "../components/molecules/JoinTeam.vue";
import TrustedPartner from "../components/molecules/TrustedPartner.vue";
import HeroSectionSlot from "../components/atoms/HeroSectionSlot.vue";
import Testimonial from "../components/molecules/Testimonial.vue";
import HomeSubSection from "../components/atoms/HomeSubSection.vue";

// constants
import { STRINGS } from "../shared/constants";

// const { data } = useQuery({
//   queryKey: ["hero-section"],
//   queryFn: () => getHeroSectionRequest({ params: { populate: "*" } }),
// });

// console.log(data.value, "hero-section")
const trustedSection = ref<any>();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      trustedSection?.value?.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
    } else {
      trustedSection?.value?.classList.remove(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });

  observer.observe(trustedSection?.value);
});
</script>

<template>
  <HeroSectionSlot>
    <div class="flex flex-col gap-[33px] items-start justify-center w-full">
      <div
        class="pr-[9px] pl-[9px] flex flex-row gap-2.5 items-center justify-center shrink-0 relative"
      >
        <div
          ref="trustedSection"
          class="text-[#ffffff] text-left text-5xl font-normal relative self-stretch flex-1 md:w-[65vw]"
        >
          {{ STRINGS.HOME_TAG_LINE }}
        </div>
      </div>
      <HomeSubSection />
    </div>
  </HeroSectionSlot>
  <TrustedPartner />
  <Testimonial />
  <JoinTeam />
  <OurBlogs :isLandingPage="true" />
</template>

<style scoped></style>
