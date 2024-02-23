<script setup lang="ts">
import { toRefs } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// @ts-ignore
import { Autoplay, Navigation } from "swiper/modules";
import MarkdownIt from "markdown-it";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Loader from "./Loader.vue";
import { openLink } from "../../shared/utilies";

interface Props {
  item: any;
  isDesktop?: boolean;
  isTablet?: boolean;
}
const props = defineProps<Props>();
const { item } = toRefs(props);

const modules = [Autoplay, Navigation];

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};
</script>
<template>
  <template v-if="item?.project_name">
    <div
      class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-4 mb-4"
    >
      <div class="flex items-center flex-row gap-4">
        <div
          class="text-[#0e163d] text-center text-3xl leading-6 heading font-normal relative"
        >
          {{ item?.project_name }}
        </div>
        <div class="badge mb-2 p-4 bg-[#E3D3E4] text-black">
          {{ item?.client }}
        </div>
      </div>
      <div
        v-if="item?.project_link"
        class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer"
        @click="() => openLink(item?.project_link)"
      >
        <div
          class="text-[#0e163d] text-center text-base leading-[22px] font-bold relative break-all"
        >
          {{ item?.project_link }}
        </div>
      </div>
    </div>
    <div
      v-if="item?.short_desc"
      class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
      v-html="renderMarkdown(item?.short_desc)"
    ></div>

    <swiper
      :modules="modules"
      :loop="true"
      :space-between="30"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
      :slides-per-view="1"
      class="lg:w-3/5 w-full mx-auto"
    >
      <swiper-slide
        v-for="p_image in item?.project_image?.data"
        :key="p_image.id"
      >
        <div class="mx-auto text-center mb-4">
          <figure class="mx-auto">
            <figcaption
              class="mt-6 flex items-center justify-center space-x-3"
            ></figcaption>
            <img
              class="bg-contain mx-auto border border-[#e3e3e3] shadow-md max-h-[60vh]"
              alt="profile picture "
              :src="p_image.attributes.url"
            />
          </figure>
        </div>
      </swiper-slide>
    </swiper>
    <div
      v-if="item?.long_desc"
      class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
      v-html="renderMarkdown(item?.long_desc)"
    ></div>
  </template>
  <template v-else>
    <Loader />
  </template>
</template>

<style scoped>
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  color: #e3e3e3;
}
</style>
