<script setup lang="ts">
import { IMAGES } from "../../shared/images";
import { ref, computed } from "vue";
const trustedSection = ref<any>();

import { useQuery } from "@tanstack/vue-query";
import { getTrustedPartnerRequest } from "../../services/trustedPartner";

const { data } = useQuery({
  queryKey: ["trusted-partner"],
  queryFn: () => getTrustedPartnerRequest({ params: { populate: "*" } }),
});

const formattedTrustedPartnerData = computed(() => {
  return data.value?.data?.attributes ?? {};
});

console.log(formattedTrustedPartnerData, "formattedTrustedPartnerData")

</script>
<template>
  <section
  class="bg-[#f2f2f2]  common-padding py-6 flex lg:flex-row flex-col items-center justify-between relative gap-8 mb-2 animate__animated"
    ref="trustedSection"
    >

    <!-- {{ JSON.stringify(formattedTrustedPartnerData) }} -->
    <div
    class="text-[#040f56] lg:text-left text-center text-[22px] leading-[26.4px] font-normal relative lg:w-[300px]"
    >
      Trusted by Executives &amp; Entrepreneurs from
    </div>
    <!-- ref="trustedSectionRight" -->
    <div
      class="gap-8 flex items-center justify-between md:flex-row flex-col relative flex-1 w-full"
    >
      <!-- <img
          v-for="(link, index) in formattedTrustedPartnerData.logo"
          :key="index"
          class="shrink-0 w-[156px] h-[52px] relative"
          :src="IMAGES.image1"
          alt="f1"
        /> -->
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
