<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getBlogs } from "../../services/blogs";
import { useRouter } from "vue-router";
import { ROUTE_CONSTANTS } from "../../shared/route";
import CommonBlogCard from "../atoms/CommonBlogCard.vue";
import BlogSkeleton from "../molecules/skeltons/BlogSkelton.vue"

interface Props {
  isLandingPage?: boolean;
}

const props = defineProps<Props>();

const { isLandingPage = false } = props;
const blogHeading = ref<any>();
const router = useRouter();

const moveToMoreBlog = () => {
  router.push(ROUTE_CONSTANTS.BLOG);
};

const { isLoading, data: blogsData } = useQuery({
  queryKey: ["blogs"],
  queryFn: () => getBlogs({ params: { populate: "*" } }),
});

const onBlogClick = (data: any) => {
  const {slug} = data?.attributes
  router.push(ROUTE_CONSTANTS.BLOG + "/" + slug);
};

const isVisibleRef = (selector: any) => {
  if (!selector) return false;
  let isVisible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      const newVisibility = entry.isIntersecting;

      // Check if the visibility state has changed
      if (newVisibility !== isVisible) {
        isVisible = newVisibility;

        // Toggle the class based on the new visibility state
        if (isVisible) {
          selector?.classList?.add("animate__fadeInUp");
        } else {
          // Add a delay before removing the class
          setTimeout(() => {
            selector?.classList?.remove("animate__fadeInUp");
          }, 500); // Adjust the delay as needed
        }
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(selector);
  return true;
};

onMounted(() => {
  isVisibleRef(blogHeading.value);
});
</script>

<template>
  <div
    class="flex flex-col gap-4 justify-start relative common-padding py-6 auto bg-[#F2F7F9]"
  >
    <template v-if="isLoading || !blogsData?.data?.length">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div v-for="index in 5" :key="index" class="py-4">
          <BlogSkeleton />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-4 animate__animated"
        ref="blogHeading"
      >
        <div
          class="text-[#0e163d] text-center text-3xl leading-6 heading font-normal relative animate__animated"
          id="blog-heading"
        >
          Our Latest Blogs
        </div>
        <div
          v-if="blogsData?.data?.length > 3 && isLandingPage"
          class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer"
          @click="moveToMoreBlog"
        >
          <div
            class="text-[#0e163d] text-center text-base leading-[22px] font-bold relative"
          >
            More Blogs
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <template v-if="isLandingPage">
          <div
            v-for="(blog, index) in blogsData?.data?.slice(0, 3)"
            :key="index"
            class="flex flex-col gap-4 items-start justify-start relative overflow-hidden h-[442px] cursor-pointer"
            @click="() => onBlogClick(blog)"
          >
            <CommonBlogCard :data="blog" />
          </div>
        </template>
        <template v-else>
          <div
            v-for="(blog, index) in blogsData?.data"
            :key="index"
            class="flex flex-col gap-4 items-start justify-start relative overflow-hidden h-[442px] cursor-pointer"
            @click="() => onBlogClick(blog)"
          >
            <CommonBlogCard :data="blog" />
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
