<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getBlogDetail } from "../services/blogs";
import { ROUTE_CONSTANTS } from "../shared/route";
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import Loader from "../components/atoms/Loader.vue";
import { IMAGES } from "../shared/images";
import { ref, watch } from "vue";

const route = useRoute();
let blogDataRef = ref<any>(null);

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

watch(blogData, (newValue) => {
  blogDataRef.value = newValue.data;
});

const renderHTML = (blocks: any) => {
  console.log(blocks, "blockess")
  return blocks
    .map((block: any) => {
      // Handle different block types
      if (block.type === "paragraph") {
        return `<p>${renderInlineStyles(block.children)}</p>`;
      } else if (block.type === "heading") {
        return `<h${block.level}>${renderInlineStyles(block.children)}</h${
          block.level
        }>`;
      } else if (block.type === "list") {
        return renderList(block);
      } else if (block.type === "link") {
        return `<a href="${block.url}">${renderInlineStyles(
          block.children
        )}</a>`;
      }
      // Add more block types as needed
    })
    .join("");
};

const renderInlineStyles = (children: any) => {
  return children
    .map((child: any) => {
      if (child.bold) {
        return `<strong>${child.text}</strong>`;
      }
      if (child.type === "link") {
        return `<a href="${child.url}">${renderInlineStyles(
          child.children
        )}</a>`;
      }
      // Add more inline styles as needed
      return child.text;
    })
    .join("");
};

const renderList = (list: any) => {
  const listItems = list.children
    .map((item: any) => {
      return `<li>${renderInlineStyles(item.children)}</li>`;
    })
    .join("");
  return `<${list.format === "ordered" ? "ol" : "ul"}>${listItems}</${
    list.format === "ordered" ? "ol" : "ul"
  }>`;
};

</script>

<template>
  <template v-if="isLoading || !blogDataRef?.attributes">
    <Loader />
  </template>
  <template v-else>
    <section class="common-padding py-9 relative bg-primary-color">
      <div class="text-white flex flex-col items-start justify-between gap-5">
        <h2 class="text-3xl" ref="breadCrumb">Blogs</h2>
        <BreadCrumbs :breadcrumbList="breadcrumbs" />
      </div>
    </section>
    <div
      class="flex flex-col gap-4 items-start justify-start relative common-padding py-6 auto bg-[#F2F7F9]"
    >
      <em class="h-96 w-full">
        <img
          class="w-full h-full bg-contain relative rounded-lg"
          :src="
            blogDataRef?.attributes?.image?.data?.attributes?.url ??
            IMAGES.imagePlaceholder
          "
        />
      </em>
      <div
        class="text-[#0a102d] text-left text-2xl relative self-stretch font-normal"
      >
        {{ blogDataRef?.attributes?.title }}
      </div>
      <div
        class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class"
        v-html="renderHTML(blogDataRef?.attributes?.desc)"
      ></div>
    </div>
  </template>
</template>

<style scoped>

</style>
