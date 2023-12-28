<template>
  <div
    class="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
  >
    <label
      class="text-[#000000] text-left  text-sm leading-7 font-normal relative w-[300px] h-7"
      :for="id"
      >{{ label }}</label
    >
    <input
      class="bg-[#ffffff] rounded-[5px] border-solid border-[#9889e1] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="$emit('update:inputValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  id: String,
  label: String,
  type: String,
  placeholder: String,
  inputValue: String,
});

const { id, label, type, placeholder, inputValue } = toRefs(props);
const emit = defineEmits(["update:inputValue"]);
</script>

<style scoped></style>
