<script setup lang="ts">
import logo from "../../assets/images/SAHARSH-SOFTWARE-3.png";
import { RouterLink } from "vue-router";
import { NAV_LINK } from "../../shared/constants";
import SocialIcons from "../atoms/SocialIcons.vue";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


</script>

<template>
  <div
    class="bg-primary-color flex flex-col gap-2.5 items-center justify-center common-padding py-6 relative"
  >
    <div
      class="w-full flex lg:flex-row flex-col gap-2.5 items-start justify-start shrink-0 relative"
    >
      <div
        class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative"
      >
        <img class="shrink-0 w-[180.32px] h-[52px] relative" :src="logo" />
        <div
          class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-[15px] leading-6 font-normal relative self-stretch"
        >
          <div class="flex flex-col gap-2.5 mb-2">
            <div class="flex flex-row gap-2.5 justify-start items-center">
              <em>
                <font-awesome-icon :icon="faLocationDot" color="#fff" />
              </em>
              <p>
                B-1003, Cedar Luxuria, ISCKON Road, Mansarovar, Jaipur, Rajasthan, India. 302020
              </p>
            </div>
            <div class="flex flex-row gap-2.5 justify-start items-center">
              <em>
                <font-awesome-icon :icon="faEnvelope" color="#fff" />
              </em>
              <p>info@saharshsoftware.com</p>
            </div><div class="flex flex-row gap-2.5 justify-start items-center">
               <em>
                  <font-awesome-icon :icon="faPhone" color="#fff" />
                </em>
              <p>
                +91 99286 18166
              </p>
            </div>
          </div>
        </div>
        <SocialIcons />
      </div>
      <div class="bg-[#262d50] self-stretch shrink-0 w-[1.16px] relative"></div>
      <div
        class="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative"
      >
        <div
          class="flex flex-row items-start justify-between self-stretch flex-1 relative"
        >
          <div
            class="flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left font-['Roboto-Regular',_sans-serif] text-lg leading-[22.5px] font-normal relative"
            >
              Company
            </div>
            <div
              class="flex flex-col gap-3 items-start justify-start shrink-0 relative"
            >
              <div
                v-for="(link, index) in NAV_LINK"
                :key="index"
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
              >
                <RouterLink class="cursor-pointer" :to="link.path">
                  {{ link.label }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left font-['Roboto-Regular',_sans-serif] text-lg leading-[22.5px] font-normal relative"
            >
              Industries
            </div>
            <div
              class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
            >
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
              >
                Capital Market
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
              >
                Finance
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
              >
                Energy
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative"
              >
                Healthcare
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#262d50] self-stretch shrink-0 w-[1.16px] relative"></div>
      <div
        class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
      >
        <div
          class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-[15px] leading-6 font-normal relative"
        >
          We build technology that brings positive change
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-primary-color flex flex-col items-center justify-between relative"
  >
    <div
      class="flex sm:flex-row flex-col gap-2.5 mb-2 items-center justify-center self-stretch shrink-0 h-24 relative"
    >
      <div
        class="text-[#7a7a7a] text-left font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative"
      >
        © 2023
      </div>
      <div
        class="text-white text-center font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative"
      >
        Saharash Technologies
      </div>
      <div
        class="text-[#7a7a7a] text-center font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative"
      >
        All rights reserved
      </div>
    </div>
  </div>
</template>

<style scoped></style>
