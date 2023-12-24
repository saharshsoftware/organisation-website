<script setup lang="ts">
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import OurBlogs from "../components/molecules/OurBlogs.vue";
import { ROUTE_CONSTANTS } from "../shared/route";
const breadcrumbs = [
  { label: 'Home', link: ROUTE_CONSTANTS.HOME },
  { label: 'Blogs', link: ROUTE_CONSTANTS.BLOG },
];
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-xl">

        Blogs
      </h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <OurBlogs />
</template>

<style scoped></style>
