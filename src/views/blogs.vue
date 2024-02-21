<script setup lang="ts">
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import OurBlogs from "../components/molecules/OurBlogs.vue";
import { STRINGS } from "../shared/constants";
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
  { label: STRINGS.SAHARSH_SOFTWARE, link: ROUTE_CONSTANTS.HOME },
  { label: STRINGS.BLOGS , link: ROUTE_CONSTANTS.BLOG },
];
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5" >
      <h2 class="text-3xl" ref="breadCrumb">

        Blogs
      </h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <OurBlogs />
</template>

<style scoped></style>
