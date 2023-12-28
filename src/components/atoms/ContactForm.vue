<script setup lang="ts">
import InputComponent from "./InputComponent.vue";

</script>
<template>
  <div class="flex flex-col gap-[30px] items-start justify-start relative md:w-[70%] w-full mx-auto animate__animated animate__fadeInUp">
    <div
      class="text-[#000000] text-left text-[22px] leading-[30px] font-normal relative self-stretch"
    >
      Thank you for your interest in Saharsh Software. Please fill out the
      form below to ask a question or report a technical problem..
    </div>
    <div
      class="text-[#070c21] text-left text-[38px] leading-[54px] font-normal relative"
    >
      We always love to hear from you
    </div>
    <div
      class="grid grid-cols-12 gap-2 items-start justify-start self-stretch shrink-0 relative "
    >
      <div class="mg:col-start-1 md:col-end-7 col-span-full">
        <InputComponent
          id="email"
          label="Email Address"
          placeholder="Email Address"
        />
      </div>

      <div class="md:col-start-7 md:col-end-13 col-span-full">
        <InputComponent id="username" label="Username" placeholder="Username" />
      </div>
      <div class="col-span-full">
        <InputComponent id="subject" label="Subject" placeholder="Subject" />
      </div>

      <div class="col-span-full">
        <div
          class="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
        >
          <label
            class="text-[#000000] text-left text-sm leading-7 font-normal relative w-[300px] h-7"
            >Message</label
          >
          <textarea
            placeholder="Message"
            rows="4"
            class="bg-[#ffffff] pt-2.5 pr-[15px] pb-2.5 pl-[15px] rounded-[5px] border-solid border-[#9889e1] border flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
          >
          </textarea>
        </div>
      </div>
      <div
        class="bg-primary-color rounded-[5px]  border px-2 py-1 flex flex-col gap-0 items-center justify-center shrink-0 w-[120px]  relative"
      >
        <div
          class="text-[#ffffff] text-center text-sm leading-7 font-normal relative"
        >
          Submit
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
