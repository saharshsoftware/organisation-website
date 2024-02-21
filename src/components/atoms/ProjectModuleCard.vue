<script setup lang="ts">
import { toRefs } from "vue";
import { openLink } from "../../shared/utilies";
import { IMAGES } from "../../shared/images";
import ActionButton from "./ActionButton.vue";

interface Props {
  data?: any;
}

const props = defineProps<Props>();
const emit = defineEmits(["click-event"]);
const { data } = toRefs(props);

const handleReadMoreClick = () => {
  emit("click-event", data.value);
};
</script>

<template>
  <em class="h-1/2 w-full">
    <img
      class="w-full h-full bg-contain relative rounded-lg"
      :src="data?.image?.data?.attributes?.url ?? IMAGES.imagePlaceholder"
    />
  </em>
  <div class="flex justify-between items-center gap-4">
    <div class="text-2xl">
      {{ data?.project_name }}
    </div>
    <a
      v-if="data?.project_link"
      class="link link-primary"
      @click="() => openLink(data?.project_link)"
    >
      Link
    </a>
  </div>
  <div class="flex flex-col gap-4 flex-1">
    <div class="flex gap-2 italic" v-if="data?.techstack">
      <div class="font-bold">Tech Stack</div>
      {{ data?.techstack }}
    </div>
    <div>
      {{ data?.short_desc }}
    </div>
  </div>
  <ActionButton :button-label="'Read more'" @click="handleReadMoreClick" />
</template>

<style scoped></style>
