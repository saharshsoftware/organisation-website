<script setup lang="ts">
import { STRINGS } from "../../shared/constants";
</script>
<template>
  <div
    class="flex lg:flex-row flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
  >
    <div
      class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
    >
      <div
        class="text-[#ffffff] text-left text-base leading-5 font-normal relative self-stretch"
      >
        Passionate Expertise: Your Winning Combination
      </div>
      <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
      <div
        class="text-[#ffffff] text-left text-base leading-6 font-normal relative self-stretch"
      >
        {{ STRINGS.HOME_SUB_P1 }}
      </div>
    </div>
    <div
      class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
    >
      <div
        class="text-[#ffffff] text-left text-base leading-5 font-normal relative self-stretch"
      >
        Engineered Excellence: Your Product's Strength
      </div>
      <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
      <div
        class="text-[#ffffff] text-left text-base leading-6 font-normal relative self-stretch"
      >
        {{ STRINGS.HOME_SUB_P2 }}
      </div>
    </div>
    <!-- <div class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative">
              <div
                class="text-[#ffffff] text-left text-base leading-5 font-normal relative self-stretch">
                Power up your team with best talent
              </div>
              <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
              <div
                class="text-[#ffffff] text-left text-base leading-6 font-normal relative self-stretch">
                Only top 1% of engineers are handpicked to work on your products
              </div>
            </div> -->
  </div>
</template>

<style scoped></style>
