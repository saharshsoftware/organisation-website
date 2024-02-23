<script setup lang="ts">
import { RouterLink } from "vue-router";
import { computed } from "vue";
import SocialIcons from "../atoms/SocialIcons.vue";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "@tanstack/vue-query";
import { getFooterRequest } from "../../services/footer";
import { IMAGES } from "../../shared/images";

const { data } = useQuery({
  queryKey: ["footer"],
  queryFn: () => getFooterRequest({ params: { populate: "*" } }),
});

const formattedFooterData = computed(() => {
  return data.value?.data?.attributes ?? {};
});
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
        <img class="shrink-0 w-[180.32px] h-[52px] relative" v-if="formattedFooterData.logo_url?.data?.attributes?.url" :src="formattedFooterData.logo_url?.data?.attributes?.url ?? IMAGES.imagePlaceholder" />
        <div
          class="text-[#6e6e6e] text-left text-[15px] leading-6 font-normal relative self-stretch"
        >
          <div class="flex flex-col gap-2.5 mb-2">
            <div class="flex flex-row gap-2.5 justify-start items-center">
              <em>
                <font-awesome-icon :icon="faLocationDot" color="#fff" />
              </em>
              <p>
                {{ formattedFooterData.location }}
              </p>
            </div>
            <div class="flex flex-row gap-2.5 justify-start items-center">
              <em>
                <font-awesome-icon :icon="faEnvelope" color="#fff" />
              </em>
              <p>{{ formattedFooterData.email }}</p>
            </div>
            <div class="flex flex-row gap-2.5 justify-start items-center">
              <em>
                <font-awesome-icon :icon="faPhone" color="#fff" />
              </em>
              <p>
                {{ formattedFooterData.mobile }}
              </p>
            </div>
          </div>
        </div>
        <SocialIcons :data="formattedFooterData.social_links" />
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
              class="text-[#ffffff] text-left text-lg leading-[22.5px] font-normal relative"
            >
              Company
            </div>
            <div
              class="flex flex-col gap-3 items-start justify-start shrink-0 relative"
            >
              <div
                v-for="(link, index) in formattedFooterData.route_link"
                :key="index"
                class="text-[#6e6e6e] text-left text-base leading-5 font-normal relative"
              >
                <template v-if="link.route">
                  <RouterLink class="cursor-pointer" :to="link.route">
                    {{ link.label }}
                  </RouterLink> </template
                ><template v-else>
                  {{ link.label }}
                </template>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left text-lg leading-[22.5px] font-normal relative"
            >
              Industries
            </div>
            <div
              class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
            >
              <div
                  v-for="(link, index) in formattedFooterData.industries"
                  :key="index"
                  class="text-[#6e6e6e] text-left text-base leading-5 font-normal relative"
                >
                  {{ link.label }}
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
          class="text-[#6e6e6e] text-left text-[15px] leading-6 font-normal relative"
        >
          {{ formattedFooterData.description }}
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
        class="text-[#7a7a7a] text-left text-sm leading-[25.6px] font-normal relative"
      >
        © {{new Date().getFullYear()}}
      </div>
      <div
        class="text-white text-center text-sm leading-[25.6px] font-normal relative"
      >
        Saharsh software LLP
      </div>
      <div
        class="text-[#7a7a7a] text-center text-sm leading-[25.6px] font-normal relative"
      >
        All rights reserved
      </div>
    </div>
  </div>
</template>

<style scoped></style>
