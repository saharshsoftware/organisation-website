<script setup lang="ts">
import { BLOG_DATA } from "../../shared/constants";
</script>
<template>
  <div
    class="flex flex-col gap-[50px] items-start justify-start relative common-padding py-6 auto"
  >
    <div
      class="rounded-[30px] flex lg:flex-row flex-col items-center justify-between shrink-0 w-full relative gap-2"
    >
      <div
        class="text-[#0e163d] text-left font-['DmSans-Regular',_sans-serif] text-5xl leading-[54px] font-bold relative"
      >
        Our Latest Blogs
      </div>
      <div
        class="border-solid border-[#237ac4] border-2 px-8 py-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-hidden "
      >
        <div
          class="text-[#0e163d] text-center font-['DmSans-Regular',_sans-serif] text-base leading-[22px] font-bold relative"
        >
          More Blogs
        </div>
      </div>
    </div>
    
    <div
      class="flex lg:flex-row flex-col gap-5 items-center justify-start self-stretch shrink-0 relative"
    >
      <div
        class="flex flex-col gap-2 items-start justify-start self-stretch flex-1 relative overflow-hidden "
        v-for="(blog, index) in BLOG_DATA"
        :key="index"
      >
        <img class="self-stretch shrink-0 h-80 relative" :src="blog.image" />
        <div class="py-1 px-2">

          <div
          class="text-[#0a102d] text-left font-['Montserrat-Regular',_sans-serif] text-3xl relative self-stretch font-bold"
          >
          {{ blog.title }}
        </div>
        <div
        class="text-[#6e6e6e] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-[30px] font-normal relative self-stretch"
        >
          {{ blog.desc }}
      </div>
        </div>
        <div
          class="bg-[#237ac4] rounded-[30px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between shrink-0 h-[22px] absolute right-[1rem] top-[14.25px]"
        >
          <div
            class="text-[#ffffff] text-left font-['Roboto-Regular',_sans-serif] text-xs leading-3 font-normal uppercase relative"
          >
            Engineering
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
