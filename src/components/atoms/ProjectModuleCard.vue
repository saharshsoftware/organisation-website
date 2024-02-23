<script setup lang="ts">
import { toRefs } from "vue";
import { IMAGES } from "../../shared/images";
import ActionButton from "./ActionButton.vue";
import MarkdownIt from "markdown-it";

interface Props {
  data?: any;
}

const props = defineProps<Props>();
const emit = defineEmits(["click-event"]);
const { data } = toRefs(props);

const handleReadMoreClick = () => {
  emit("click-event", data.value);
};

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};
</script>

<template>
  <div class="md:col-span-5 col-span-full">
    <em class="h-1/2 w-full max-h-60">
      <img
        class="w-full h-full bg-contain relative rounded-lg aspect-video"
        :src="
          data?.attributes?.image?.data?.attributes?.url ??
          IMAGES.imagePlaceholder
        "
      />
    </em>
  </div>

  <div class="md:col-span-7 col-span-full ">
    <div class="flex flex-col gap-4 h-full min-h-72">
      <div class="text-2xl">
        {{ data?.project_name }}
      </div>
      <div class="flex-1">
        <div
          v-if="data?.short_desc"
          class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
          v-html="renderMarkdown(data?.short_desc)"
        ></div>
      </div>
      <ActionButton
        :button-label="'Read more'"
        @click="handleReadMoreClick"
        :customClass="'max-w-fit'"
      />
    </div>
  </div>
</template>

<style scoped></style>
