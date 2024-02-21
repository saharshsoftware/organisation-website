<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  foo: String,
  buttonLabel: String,
  disabled: Boolean,
  isSubmit: Boolean,
  isLoading: Boolean,
  customClass: String,
  icon: String,
  onclick: Function,
});

const { buttonLabel, isLoading, disabled, isSubmit, customClass } =
  toRefs(props);

// Access the callbackProp from props
const handleClick = () => {
  // Call the callback function when the button is clicked
  if (props.onclick) {
    props.onclick();
  }
};
</script>

<template>
  <button :type="isSubmit ? 'submit' : 'button'" :disabled="disabled || isLoading" @click="handleClick" :class="[
    `${disabled ? 'custom-btn-disabled' : ''} ${customClass ?? ''
    } min-w-[100px]`,
    'whitespace-nowrap btn bg-primary-color text-white focus-visible:outline-none',
  ]">
    <span class="flex items-center gap-2 justify-between">
      <template v-if="icon">
        <font-awesome-icon :icon="icon" />
      </template>
      <template v-if="isLoading">
        <span class="loading loading-spinner"></span>
      </template>
      <template v-else>
        {{ buttonLabel }}
      </template>
    </span>
  </button>
</template>

<style scoped></style>