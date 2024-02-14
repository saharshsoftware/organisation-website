<script setup lang="ts">
import { toRefs } from "vue";
import Loader from "./Loader.vue";

interface Props {
  isLoading?: boolean;
  responseData?: any;
}
const props = defineProps<Props>();
const { isLoading, responseData } = toRefs(props);
</script>
<template>
  <template v-if="isLoading || !responseData">
    <div class="w-full">
      <Loader />
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<style scoped></style>
