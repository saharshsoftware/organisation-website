<script setup lang="ts">
import logo from "../../assets/images/SAHARSH-SOFTWARE-3.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "vue-router";
import { NAV_LINK } from "../../shared/constants";
</script>
<template>
  <div class="bg-[#0A102D] md:px-24 px-4">
    <div
      class="flex flex-row items-center justify-between relative w-full h-[116px]"
    >
      <RouterLink class="cursor-pointer" to="/">
        <img class="shrink-0 h-[46px] relative" :src="logo" alt="image-add" />
      </RouterLink>
      <div
        class="lg:flex flex-row gap-8 items-start justify-start shrink-0 relative hidden"
      >
        <div
          v-for="(link, index) in NAV_LINK"
          :key="index"
          class="text-[#ffffff] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
        >
          <RouterLink class="cursor-pointer" :to="link.path">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>

      <div
        class="lg:flex hidden rounded-[3px] border-solid border-[#ffffff] border-2 pr-[22px] pl-[22px] flex-row items-center justify-between relative overflow-hidden"
      >
        <div
          class="text-[#ffffff] text-center font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
        >
          Let&#039;s talk
        </div>
      </div>
      <div class="lg:hidden">
        <font-awesome-icon :icon="faBars" color="#fff" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
