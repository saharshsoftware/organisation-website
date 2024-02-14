<script setup lang="ts">
import { toRefs } from "vue";
import { openLink } from "../../shared/utilies";

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
  <button class="btn" @click="handleReadMoreClick">Read more</button>
</template>

<style scoped></style>
