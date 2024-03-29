<script setup lang="ts">
import logo from "../../assets/images/digital-professional.jpg";
import { onMounted, ref, computed } from "vue";

const trustedSection = ref<any>();
const lifeDiv = ref<any>();

import { useQuery } from "@tanstack/vue-query";
import { getJoinTeamRequest } from "../../services/jointeam";

const { data: joinTeamData } = useQuery({
  queryKey: ["join-team"],
  queryFn: () => getJoinTeamRequest({ params: { populate: "*" } }),
});

const formattedjoinTeamData = computed(() => {
  return joinTeamData.value?.data?.attributes ?? {};
});

onMounted(() => {

  const lifeDivObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      lifeDiv?.value?.classList.add("animate__animated", "animate__fadeInLeft");
    } else {
      lifeDiv?.value?.classList.remove(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });

  lifeDivObserver.observe(lifeDiv?.value);
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
    class="flex flex-col items-center justify-between self-stretch shrink-0 relative gap-2.5"
  >
    <div
      ref="trustedSection"
      class="text-[#414562] text-center  text-2xl leading-10 heading font-normal relative animate__animated"
    >
      Join Our Team
    </div>
    <div
      class="bg-[#f0f0f0] flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative"
    >
      <div
        class="flex lg:flex-row flex-col items-center justify-between self-stretch relative"
      >
        <div
          class="common-padding py-16 flex flex-col items-center justify-between self-stretch flex-1 relative"
        >
          <div
            ref="lifeDiv"
            class="py-16 flex flex-col gap-[30px] items-start justify-center self-stretch shrink-0 relative "
          >
            <div
              class="text-[#414562] text-left  text-[25px] leading-[38px] font-normal relative self-stretch"
            >
              {{ formattedjoinTeamData.title }}
            </div>
            <!-- ref="lifeDiv" -->
            <div
              class="text-[#414562] text-left  text-[25px] leading-[38px] font-normal relative self-stretch "
            >
            {{ formattedjoinTeamData.message }}
            </div>
            <div class="flex justify-between items-center w-full">
              <div
                class="text-[#414562] text-left  text-xl leading-[30px] font-normal relative self-stretch"
              >
                {{ formattedjoinTeamData.role }}
              </div>
              <div
                class="bg-[#f0f0f0] flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
              ></div>
            </div>
          </div>
        </div>
        <img class="self-stretch flex-1 relative lg:w-[50%]" :src="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
