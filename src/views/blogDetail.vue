<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getBlogDetail } from "../services/blogs";
import { ROUTE_CONSTANTS } from "../shared/route";
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import Loader from "../components/atoms/Loader.vue";
import { IMAGES } from "../shared/images";
import { ref, computed } from "vue";
import MarkdownIt from 'markdown-it';

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const route = useRoute();

const { isLoading, data: blogData } = useQuery({
  queryKey: ["blog-detail", route.params?.id],
  queryFn: () =>
    getBlogDetail({ params: { populate: "*" }, id: route.params?.id }),
  enabled: !!route.params?.id,
});

const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Blogs", link: ROUTE_CONSTANTS.BLOG },
]);

const formattedProjectImage = computed(() => {
  return blogData.value?.data?.attributes ?? {};
});

</script>

<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Blogs</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <div
      class="flex flex-col gap-4 items-start justify-start relative common-padding lg:w-3/5 py-6 mx-auto "
    >
  <template v-if="isLoading || !formattedProjectImage">
    <div class="w-full">
      <Loader />
    </div>
  </template>
  <template v-else>
      <div
        class="text-[#0a102d] text-left text-4xl relative self-stretch font-normal"
      >
        {{ formattedProjectImage?.title }}
      </div>
      <em class=" w-full">
        <img
          class="w-full h-full object-contain relative rounded-lg mx-auto"
          :src="
            formattedProjectImage?.image?.data?.attributes?.url ??
            IMAGES.imagePlaceholder
          "
        />
      </em>

        <div
          class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
          v-html="renderMarkdown(formattedProjectImage?.description)"
        >
      </div>
       
    </template>
    </div>
</template>

<style scoped>

</style>
