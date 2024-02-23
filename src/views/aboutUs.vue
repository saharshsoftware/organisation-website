<script setup lang="ts">
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import { useResizeObserver } from "@vueuse/core";
import { ROUTE_CONSTANTS } from "../shared/route";
import { STRINGS } from "../shared/constants";
import MarkdownIt from "markdown-it";
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getAboutUsRequest } from "../services/aboutus";
import RenderDataResponse from "../components/atoms/RenderDataResponse.vue";

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const { data: aboutData, isLoading } = useQuery({
  queryKey: ["about-us"],
  queryFn: () => getAboutUsRequest({ params: { populate: "*" } }),
});

const formattedAboutUsData = computed(() => {
  return aboutData.value?.data?.attributes ?? {};
});

const el = ref(null);
const isTablet = ref(false);

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  isTablet.value = width > 768;
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
  { label: STRINGS.ABOUT_US, link: ROUTE_CONSTANTS.ABOUT },
];
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">About Us</h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>

  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse
      :isLoading="isLoading"
      :responseData="formattedAboutUsData"
    >
      <div
        class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class"
        v-html="renderMarkdown(formattedAboutUsData?.mision)"
      ></div>

      <div
        class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class"
        v-html="renderMarkdown(formattedAboutUsData?.vision)"
      ></div>
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
