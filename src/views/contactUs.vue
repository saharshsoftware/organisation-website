<script setup lang="ts">
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import ContactForm from "../components/atoms/ContactForm.vue";
import { ROUTE_CONSTANTS } from "../shared/route";
import { onMounted, ref } from "vue";
const breadCrumb = ref<any>()

onMounted(() => {

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      breadCrumb?.value?.classList.add('animate__animated', 'animate__fadeInLeft');
    } else {
      breadCrumb?.value?.classList.remove('animate__animated', 'animate__fadeInLeft');
    }
  });

  observer.observe(breadCrumb?.value);


});
const breadcrumbs = [
  { label: 'Saharsh Software', link: ROUTE_CONSTANTS.HOME },
  { label: 'Contact us', link: ROUTE_CONSTANTS.CONTACT_US },
];
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5 " >
      <h2 class="text-3xl"
      ref="breadCrumb">

        Contact Us
      </h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <div class="common-padding m-auto py-4">
    <ContactForm />
  </div>
</template>

<style scoped></style>
