<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  data?: any
}

const props = defineProps<Props>()
const {data} = toRefs(props)
console.log(data.value)
</script>
<template>
  <div
    class="flex lg:flex-row flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
  >
      <div
      class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
      v-for="(item, index) in data"
      :key="index"
    >
      <div
        class="text-[#ffffff] text-left text-base leading-5 font-normal relative self-stretch"
      >
        {{ item.subtitle }}
      </div>
      <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
      <div
        class="text-[#ffffff] text-left text-base leading-6 font-normal relative self-stretch"
      >
      {{ item.tagline }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
