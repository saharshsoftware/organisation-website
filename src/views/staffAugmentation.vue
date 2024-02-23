<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import { STRINGS } from "../shared/constants";
import { ROUTE_CONSTANTS } from "../shared/route";
import { computed, onMounted, ref } from "vue";
import MarkdownIt from "markdown-it";
import { getStaffSegmentationData } from "../services/staffAugmentation";
import RenderDataResponse from "../components/atoms/RenderDataResponse.vue";

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const breadCrumb = ref<any>();
const { data, isLoading } = useQuery({
  queryKey: ["staff-augmentation"],
  queryFn: () => getStaffSegmentationData({ params: { populate: "*" } }),
});

const formattedData = computed(() => {
  return data.value?.data?.attributes ?? {};
});

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
  {
    label: STRINGS.STAFF_AUGMENTATION,
    link: ROUTE_CONSTANTS.STAFF_AUGMENTATION,
  },
];
</script>

<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">
        {{ STRINGS.STAFF_AUGMENTATION }}
      </h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>

  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse :isLoading="isLoading" :responseData="formattedData">
      <div
        class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class"
        v-html="renderMarkdown(formattedData?.content)"
      ></div>
    </RenderDataResponse>
  </section>
</template>
<style scoped></style>
