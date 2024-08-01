<script setup lang="ts">
import { ref, computed } from "vue";
const trustedSection = ref<any>();

import { useQuery } from "@tanstack/vue-query";
import { getTrustedPartnerRequest } from "../../services/trustedPartner";
import { sanitizeStrapiImageUrl } from "../../shared/utilies";

const { data } = useQuery({
  queryKey: ["trusted-partner"],
  queryFn: () =>
    getTrustedPartnerRequest({ params: { populate: "image.url" } }),
});

const formattedTrustedPartnerData = computed(() => {
  return data.value?.data?.attributes ?? {};
});
</script>
<template>
  <section
    class="bg-[#f2f2f2] common-padding py-6 flex lg:flex-row flex-col items-center justify-between relative gap-8 mb-2 animate__animated"
    ref="trustedSection"
  >
    <div
      class="text-[#040f56] lg:text-left text-center text-[22px] leading-[26.4px] font-normal relative lg:w-[300px]"
    >
      Trusted by Executives &amp; Entrepreneurs from
    </div>
    <div
      class="gap-4 flex items-center justify-between md:flex-row flex-col relative flex-1 w-full"
    >
      <img
        v-for="(imageData, index) in formattedTrustedPartnerData?.image"
        :key="index"
        class="w-25 h-10 relative"
        :src="sanitizeStrapiImageUrl(imageData?.url?.data?.attributes?.url) ?? ''"
        alt="partner_image"
      />
    </div>
  </section>
</template>

<style scoped></style>
