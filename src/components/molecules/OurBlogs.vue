<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getBlogs } from "../../services/blogs";
import { IMAGES } from "../../shared/images";
import { useRouter } from "vue-router";
import { ROUTE_CONSTANTS } from "../../shared/route";

interface Props {
  isLandingPage?: boolean
}

const props = defineProps<Props>()

const {isLandingPage=false} = props
const blogHeading = ref<any>();
const readMoreLimit = ref<number>(75);
const router = useRouter();

const moveToMoreBlog = () => {
  router.push(ROUTE_CONSTANTS.BLOG)
}

const { isLoading, data: blogsData } = useQuery({
  queryKey: ["blogs"],
  queryFn: () => getBlogs({ params: { populate: "*" } }),
});

const onBlogClick = (data: any) => {
  const { id } = data;
  router.push(ROUTE_CONSTANTS.BLOG + "/" + id);
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
    class="flex flex-col gap-[50px] items-start justify-start relative common-padding py-6 auto bg-[#F2F7F9]"
  >
    <div
      class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-2 animate__animated"
      ref="blogHeading"
    >
      <div
        class="text-[#0e163d] text-center text-3xl leading-6 heading font-normal relative animate__animated"
        id="blog-heading"
      >
        Our Latest Blogs
      </div>
      <div
        v-if="blogsData?.data?.length>3 && isLandingPage"
        class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden cursor-pointer"
        @click="moveToMoreBlog"
      >
        <div
          class="text-[#0e163d] text-center  text-base leading-[22px] font-bold relative">
          More Blogs
        </div>
      </div>
    </div>
    <template v-if="isLoading || !blogsData?.data?.length">
      <div class="text-center" v-if="isLoading">Loading...</div>
    </template>
    <template v-else>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <template v-if="isLandingPage">
          <div
          v-for="(blog, index) in blogsData?.data?.slice(0, 3)"
          :key="index"
          class="flex flex-col gap-4 items-start justify-start relative overflow-hidden h-[400px] cursor-pointer"
          @click="() => onBlogClick(blog)"
        >
          <em class="h-3/5 w-full">
            <img
            class="w-full h-full bg-contain relative rounded-lg"
            :src="
                blog?.attributes?.image?.data?.attributes?.url ??
                IMAGES.imagePlaceholder
                "
            />
          </em>
          <div class="py-1 px-2 flex-1">
            <div
            class="text-[#0a102d] text-left text-2xl relative self-stretch font-normal"
            >
            {{
              blog?.attributes?.title?.length > readMoreLimit
              ? blog?.attributes?.title.slice(0, readMoreLimit) + "..."
              : blog?.attributes?.title
              }}
            </div>
            <div
              class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch"
              >
              {{ blog?.attributes?.description }}
            </div>
          </div>
          <div
          class="bg-[#237ac4] rounded-[30px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between shrink-0 h-[22px] absolute right-[1rem] top-[14.25px]"
          v-if="blog?.attributes?.category"
          >
          <div
          class="text-[#ffffff] text-left text-xs leading-3 font-normal uppercase relative"
          >
          {{ blog?.attributes?.category }}
        </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
            v-for="(blog, index) in blogsData?.data"
            :key="index"
            class="flex flex-col gap-4 items-start justify-start relative overflow-hidden h-[400px] cursor-pointer"
            @click="() => onBlogClick(blog)"
            >
            <em class="h-3/5 w-full">
              <img
              class="w-full h-full bg-contain relative rounded-lg"
              :src="blog?.attributes?.image?.data?.attributes?.url ??
                IMAGES.imagePlaceholder
                "
              />
            </em>
            <div class="py-1 px-2 flex-1">
              <div
              class="text-[#0a102d] text-left text-2xl relative self-stretch font-normal"
              >
              {{
                blog?.attributes?.title?.length > readMoreLimit
                ? blog?.attributes?.title.slice(0, readMoreLimit) + "..."
                : blog?.attributes?.title
              }}
              </div>
              <div
                class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch"
                >
                {{ blog?.attributes?.description }}
              </div>
            </div>
            <div
            class="bg-[#237ac4] rounded-[30px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between shrink-0 h-[22px] absolute right-[1rem] top-[14.25px]"
            v-if="blog?.attributes?.category"
            >
            <div
            class="text-[#ffffff] text-left text-xs leading-3 font-normal uppercase relative"
            >
            {{ blog?.attributes?.category }}
          </div>
            </div>
          </div>
      </template>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
