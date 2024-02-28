<script setup lang="ts">
import { toRefs, ref } from "vue";
import { IMAGES } from "../../shared/images";
import MarkdownIt from "markdown-it";

interface Props {
  data?: any;
}

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const props = defineProps<Props>();
const { data } = toRefs(props);
const readMoreLimit = ref<number>(75);
</script>
<template>
  <em class="h-1/2 w-full">
    <img
      class="w-full h-full bg-contain relative rounded-lg"
      :src="
        data?.attributes?.image?.data?.attributes?.url ??
        IMAGES.imagePlaceholder
      "
    />
  </em>
  <div class="py-1 px-2 flex-1">
    <div
      class="text-[#0a102d] text-left text-2xl relative self-stretch font-normal line-clamp-3"
    >
      {{
        data?.attributes?.title?.length > readMoreLimit
          ? data?.attributes?.title.slice(0, readMoreLimit) + "..."
          : data?.attributes?.title
      }}
    </div>
    <div
      class="text-[#6e6e6e] text-left text-base leading-[30px] font-normal relative self-stretch line-clamp-3"
      v-html="renderMarkdown(data?.attributes?.description)"
    ></div>
  </div>
  <div
    class="bg-[#237ac4] rounded-[30px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between shrink-0 h-[22px] absolute right-[1rem] top-[14.25px]"
    v-if="data?.attributes?.category"
  >
    <div
      class="text-[#ffffff] text-left text-xs leading-3 font-normal uppercase relative"
    >
      {{ data?.attributes?.category }}
    </div>
  </div>
</template>

<style scoped></style>
