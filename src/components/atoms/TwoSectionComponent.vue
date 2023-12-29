<script setup lang="ts">
import { toRefs } from "vue";
import { ref } from "vue";
import { useResizeObserver } from "@vueuse/core";

interface ITwoSectionComponent {
  isReverse?: boolean;
  classRight?: string;
  classLeft?: string;
}

const el = ref(null);
const isTablet = ref(false);

const props = defineProps<ITwoSectionComponent>();
let { isReverse } = toRefs(props);

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  isTablet.value = width > 768;
  console.log(isTablet.value);
});
</script>
<template>
  <section
    ref="el"
    class="flex flex-col lg:flex-row my-20 common-padding gap-8"
    :class="{ 'flex-col-reverse lg:flex-row-reverse': isReverse && isTablet }"
  >
    <!-- First div -->
    <div class="lg:w-1/2" :class="!!classLeft && classLeft" id="leftDiv">
      <!-- Content for the first div -->
      <slot name="left"></slot>
    </div>

    <!-- Second div -->
    <div
      id="rightDiv"
      :class="!!classRight && classRight"
      class="lg:w-1/2 bg-no-repeat bg-center bg-cover"
    >
      <!-- Content for the second div -->
      <slot name="right"></slot>
    </div>
  </section>
</template>

<style scoped></style>
