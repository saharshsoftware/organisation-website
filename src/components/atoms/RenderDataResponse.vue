<script setup lang="ts">
import { toRefs } from "vue";
import Loader from "./Loader.vue";

interface Props {
  isLoading?: boolean;
  responseData?: any;
  skeltonType?: string;
}
const props = defineProps<Props>();
const { isLoading, responseData, skeltonType } = toRefs(props);
</script>
<template>
  <template v-if="isLoading || !responseData">
    <div class="w-full">
      <Loader :skelton-type="skeltonType ?? ''"/>
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<style scoped></style>
