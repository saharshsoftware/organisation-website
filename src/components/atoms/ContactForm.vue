<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import InputComponent from "./InputComponent.vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { createContactUserRequest, getContactUsMessageRequest } from "../../services/contactUser";
import ActionButton from "./ActionButton.vue";

const { data: contactMessage } = useQuery({
  queryKey: ["contact-us-message"],
  queryFn: () =>
    getContactUsMessageRequest({ params: { populate: "*" } }),
});

const formattedContactMessage = computed(() => {
  return contactMessage.value?.data?.attributes ?? {};
});

const formData = reactive<any>({
  email: "",
  username: "",
  subject: "",
  message: "",
});

const resetForm = () => {
  formData.email = ""
  formData.subject=  "",
  formData.message = ""
}

const rules = {
  email: {
    required,
    email
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
  isPending
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
      {{ formattedContactMessage.message }}
    </div>
    <div
      class="text-[#070c21] text-left text-[38px] leading-[54px] font-normal relative"
    >
      We always love to hear from you
    </div>
    <div
      class="grid grid-cols-12 gap-2 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="col-span-full">
        <InputComponent
          v-model="formData.email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          :errorMessage="v$?.email?.$error ? v$?.email?.$errors?.[0]?.$message :'' "
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
      <ActionButton :isLoading="isPending" :button-label="'Submit'" @click="addContactUser" />
    </div>
  </div>
</template>

<style scoped></style>
