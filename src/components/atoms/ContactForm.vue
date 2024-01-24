<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import InputComponent from "./InputComponent.vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { createContactUserRequest, getContactUsMessageRequest } from "../../services/contactUser";

const { data: contactMessage } = useQuery({
  queryKey: ["contact-us-message"],
  queryFn: () =>
    getContactUsMessageRequest({ params: { populate: "*" } }),
});

const formattedContactMessage = computed(() => {
  return contactMessage.value?.data?.attributes ?? {};
});

console.log(formattedContactMessage.value, "formattedContactMessage")

const formData = reactive<any>({
  email: "",
  username: "",
  subject: "",
  message: "",
});

const resetForm = () => {
  formData.email = ""
  formData.username=  ""
  formData.subject=  "",
  formData.message = ""
}

const rules = {
  email: {
    required,
    email
  },

  username: {
    required,
  },
  subject: {
    required,
  },
  message: {
    required,
  },
};

const v$ = useVuelidate(rules, formData);

const {
  mutate: mutateContactForm,
} = useMutation({
  mutationFn: createContactUserRequest,
  onSuccess: async () => {
    await v$.value.$reset();
    resetForm()
  },
});

const addContactUser = async () => {
  const result = await v$.value.$validate();
  if (result) {
    let { email, username, subject, message } = formData;
    const body = {
      data : {
        email, username, subject, message 
      }
    }
    mutateContactForm({body})
  } else {
    console.log("Form is invalidate");
  }
};

</script>
<template>
  <div
    class="flex flex-col gap-[30px] items-start justify-start relative md:w-[70%] w-full mx-auto animate__animated animate__fadeInUp"
  >
    <div
      class="text-[#000000] text-left text-[22px] leading-[30px] font-normal relative self-stretch"
    >
      Thank you for your interest in Saharsh Software. Please fill out the form
      below to ask a question or report a technical problem..
    </div>
    <div
      class="text-[#070c21] text-left text-[38px] leading-[54px] font-normal relative"
    >
      We always love to hear from you
    </div>
    <div
      class="grid grid-cols-12 gap-2 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="mg:col-start-1 md:col-end-7 col-span-full">
        <InputComponent
          v-model="formData.email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          :errorMessage="v$?.email?.$error ? v$?.email?.$errors?.[0]?.$message :'' "
          />
      </div>

      <div class="md:col-start-7 md:col-end-13 col-span-full">
        <InputComponent
          v-model="formData.username"
          placeholder="Enter your username"
          label="Username"
          type="test"
          :errorMessage="v$?.username?.$error ? v$?.username?.$errors?.[0]?.$message : ''"
          />
      </div>
      <div class="col-span-full">
        <InputComponent
          v-model="formData.subject"
          placeholder="Enter your subject"
          label="Subject"
          type="test"
          :errorMessage="v$?.subject?.$error ? v$?.subject?.$errors?.[0]?.$message : ''"
          />
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
            v-model="formData.message"
            placeholder="Enter your message"
            rows="4"
            class="bg-[#ffffff] pt-2.5 pr-[15px] pb-2.5 pl-[15px] rounded-[5px] border-solid border-[#9889e1] border flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
          >
          </textarea>
          <span v-if="v$?.message?.$error" class="text-error">{{ v$?.message?.$errors?.[0]?.$message }}</span>
        </div>
      </div>
      <button
        class=" cursor-pointer bg-primary-color rounded-[5px] border px-2 py-1 flex flex-col gap-0 items-center justify-center shrink-0 w-[120px] relative"
      >
        <div
          class="text-[#ffffff] text-center text-sm leading-7 font-normal relative "
          @click="addContactUser"
        >
          Submit
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
