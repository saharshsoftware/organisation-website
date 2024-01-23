<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// @ts-ignore
import { Autoplay } from "swiper/modules";
import MarkdownIt from "markdown-it";

import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/vue-query";
import { getProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import Loader from "../atoms/Loader.vue";

const modules = [Autoplay];

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const { data: aboutData, isLoading } = useQuery({
  queryKey: ["project_image"],
  queryFn: () =>
    getProjectImagesRequest({
      params: { populate: "client_projects.project_image" },
    }),
});

const formattedProjectImage = computed(() => {
  return aboutData.value?.data?.attributes ?? {};
});

const el = ref(null);
const isTablet = ref(false);
const isDesktop = ref(false);

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  isTablet.value = width > 768;
  isDesktop.value = width > 1024;
  console.log(isTablet.value);
});

const breadCrumb = ref<any>();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      breadCrumb?.value?.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
    } else {
      breadCrumb?.value?.classList.remove(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });

  observer.observe(breadCrumb?.value);
});
const breadcrumbs = [
  { label: STRINGS.SAHARSH_SOFTWARE, link: ROUTE_CONSTANTS.HOME },
  { label: STRINGS.PROJECTS, link: ROUTE_CONSTANTS.PROJECTS },
];

function openLink(url: string) {
  window.open(url, "_blank");
}
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Some Of Our Projects</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <template v-if="isLoading || !formattedProjectImage">
      <Loader />
  </template>
  <template v-if="formattedProjectImage">
    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <div
        v-for="(item, index) in formattedProjectImage?.client_projects"
        :key="index"
      >
        <div
          class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-4 mb-4"
        >
        <div class='flex items-center flex-row gap-4'>
          <div
            class="text-[#0e163d] text-center text-3xl leading-6 heading font-normal relative"
          >
            {{ item?.project_name }}
          </div>
            <div class="badge mb-2 p-4 bg-[#E3D3E4] text-black">{{ item.client }}</div>
          </div>
          <div
            v-if='item?.project_link'
            class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer"
            @click="() => openLink(item?.project_link)"
          >
            <div
              class="text-[#0e163d] text-center text-base leading-[22px] font-bold relative break-all"
            >
              {{ item?.project_link }}
          </div></div>
        </div>
        <div
            v-if="item?.project_desc"
            class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
            v-html="renderMarkdown(item?.project_desc)"
          ></div>
        <swiper
          :modules="modules"
          :loop="true"
          :space-between="30"
          :slides-per-view="isDesktop ? 3 : (isTablet ? 2 : 1)"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3500, disableOnInteraction: false }"
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
                  class="bg-contain mx-auto border border-[#e3e3e3] shadow-md max-h-[50vh]"
                  alt="profile picture "
                  :src="p_image.attributes.url"
                />
              </figure>
            </div>
          </swiper-slide>
        </swiper>
        
      </div>
    </section>
  </template>

</template>

<style scoped></style>
