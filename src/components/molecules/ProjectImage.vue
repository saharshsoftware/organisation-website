<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import MarkdownIt from "markdown-it";

// sercices
import { getParentProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";

// components
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import { useRouter } from "vue-router";
import RenderDataResponse from "../atoms/RenderDataResponse.vue";
import { IMAGES } from "../../shared/images";
import ActionButton from "../atoms/ActionButton.vue";

const router = useRouter();
const { data: parentProjects, isLoading } = useQuery({
  queryKey: ["parent_projects"],
  queryFn: () =>
    getParentProjectImagesRequest({
      params: { populate: "*" },
    }),
});

const formattedParentProject = computed(() => {
  return parentProjects.value?.data ?? {};
});

const el = ref(null);

const breadCrumb = ref<any>();

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};
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

const onProjectClick = (data: any) => {
  const { id } = data;
  const { slug } = data?.attributes;
  console.log(data, id);
  router.push(ROUTE_CONSTANTS.PROJECT_MODULES + "/" + slug);
};
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Some Of Our Projects</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>

  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse
      :isLoading="isLoading"
      :responseData="formattedParentProject"
    >
      <div class="grid grid-cols-1 gap-4">
        <div
          v-for="(data, index) in formattedParentProject"
          :key="index"
          class="flex flex-col items-start gap-6 border shadow-md p-2 rounded relative"
        >
          <div class="md:col-span-3 col-span-full ">
            <em class="max-h-72">
              <img
                class="w-full h-10 bg-contain relative rounded-lg aspect-video"
                :src="
                  data?.attributes?.image?.data?.attributes?.url ??
                  IMAGES.imagePlaceholder
                "
              />
            </em>
          </div>
          <div class="md:col-span-9 col-span-full">
            <div class="flex flex-col gap-4 h-full min-h-72">
              <div class="text-2xl">
                {{ data?.attributes?.label }}
              </div>
              <div class="flex-1">
                <div
                  v-if="data?.attributes?.desc"
                  class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
                  v-html="renderMarkdown(data?.attributes?.desc)"
                ></div>
              </div>
              <ActionButton
                :button-label="'Read more'"
                @click="() => onProjectClick(data)"
                :customClass="'max-w-fit'"
              />
            </div>
          </div>
        </div>
      </div>
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
