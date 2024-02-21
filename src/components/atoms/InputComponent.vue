<script setup lang="ts">
import { toRefs } from "vue";

interface Props {
  label: string;
  modelValue?: string;
  id?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: any;
}

const props = defineProps<Props>();
const { label, id, type, modelValue, placeholder, disabled, errorMessage } =
  toRefs(props);
const emit = defineEmits<{
  (event: "update:modelValue", value: any): void;
}>();

function handleInput(event: any) {
  const target = event.target;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div
    class="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
  >
    <label
      class="text-[#000000] text-left text-sm leading-7 font-normal relative w-[300px] h-7"
      :for="id"
      >{{ label }}</label
    >
    <input
      class="bg-[#ffffff] rounded-[5px] border-solid border-[#9889e1] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
    <span v-if="errorMessage" class="text-error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped></style>
