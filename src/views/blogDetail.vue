<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getBlogs } from "../services/blogs";
import { ROUTE_CONSTANTS } from "../shared/route";
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import { IMAGES } from "../shared/images";
import { ref, computed } from "vue";
import MarkdownIt from "markdown-it";
import RenderDataResponse from "../components/atoms/RenderDataResponse.vue";
import { SKELTON_TYPE } from "../shared/constants";

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const route = useRoute();

const { isLoading, data: blogsData } = useQuery({
  queryKey: ["blogs"],
  queryFn: () => getBlogs({ params: { populate: "*" } }),
  enabled: !!route.params?.id,
});

const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Blogs", link: ROUTE_CONSTANTS.BLOG },
]);

const formattedBlogDetails = computed(() => {
  const blogDetaildata = blogsData.value?.data?.find(
    (item: any) => item?.attributes?.slug === route.params?.id
  );
  return blogDetaildata?.attributes ?? {};
});
</script>

<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Blogs</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <section
    class="flex flex-col gap-4 items-start justify-start relative common-padding lg:w-3/5 py-6 mx-auto"
  >
    <RenderDataResponse
      :isLoading="isLoading || !formattedBlogDetails"
      :responseData="formattedBlogDetails"
      :skelton-type="SKELTON_TYPE.BLOG_DETAIL"
    >
      <div
        class="text-[#0a102d] text-left text-4xl relative self-stretch font-normal"
      >
        {{ formattedBlogDetails?.title }}
      </div>
      <em class="w-full">
        <img
          class="w-full h-full object-contain relative rounded-lg mx-auto"
          :src="
            formattedBlogDetails?.image?.data?.attributes?.url ??
            IMAGES.imagePlaceholder
          "
        />
      </em>

      <div
        class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
        v-html="renderMarkdown(formattedBlogDetails?.description)"
      ></div>
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
