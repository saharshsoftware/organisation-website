<script setup lang="ts">
// libs
import { onMounted, ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
// services
import { getWhyChooseRequest } from "../../services/whychooseus";
import { IMAGES } from "../../shared/images";
import Loader from "../atoms/Loader.vue";

const whyChooseSection = ref<any>();

const { isLoading, data } = useQuery({
  queryKey: ["whychoose"],
  queryFn: () => getWhyChooseRequest({ params: { populate: "info.image" } }),
});

const formattedWhyChooseData = computed(() => {
  return data.value?.data?.attributes ?? {};
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
  isVisibleRef(whyChooseSection.value);
});
</script>

<template>
    <div
      class="flex flex-col gap-8 relative common-padding py-6 auto "
    >
    <div
      class="text-[#414562] text-center text-2xl leading-10 font-normal relative animate__animated"
    >
      <span class="heading relative animate__animated" ref="whyChooseSection">
        Why Choose Us
      </span>
    </div>
    <template v-if="isLoading || !formattedWhyChooseData?.info?.length">
      <div class="text-center" v-if="isLoading"><Loader /></div>
    </template>
    <template v-else>
      <div class="grid lg:grid-cols-3 gap-4">
        <div
        v-for="(item, index) in formattedWhyChooseData?.info"
        :key="index"
        >
        <div class="flex flex-col items-center gap-4">
          <em class="flex items-center justify-center">
            <img
              class="h-24 w-24 relative rounded-lg"
              :src="
                item?.image?.data?.attributes?.url ?? IMAGES.imagePlaceholder
              "
            />
          </em>
          <h2 class="text-[#0a102d] text-left text-2xl ">
            {{ item?.title }}
          </h2>
          <p class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal ">{{ item?.description }}</p>
        </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
