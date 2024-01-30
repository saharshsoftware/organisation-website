<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

import "swiper/css";
import "swiper/css/pagination";

// sercices
import { getProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";

// components
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import Loader from "../atoms/Loader.vue";
import CustomTable from "../atoms/CustomTable.vue";

const { data: aboutData, isLoading } = useQuery({
  queryKey: ["project_image"],
  queryFn: () =>
    getProjectImagesRequest({
      params: { populate: "client_projects.project_image" },
    }),
});

const formattedProjectImage = computed(() => {
  return aboutData.value?.data?.attributes ?? {};
});

const el = ref(null);
const isTablet = ref(false);
const isDesktop = ref(false);

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  isTablet.value = width > 768;
  isDesktop.value = width > 1024;
  console.log(isTablet.value);
});

const breadCrumb = ref<any>();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      breadCrumb?.value?.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
    } else {
      breadCrumb?.value?.classList.remove(
        "animate__animated",
        "animate__fadeInLeft"
      );
    }
  });

  observer.observe(breadCrumb?.value);
});
const breadcrumbs = [
  { label: STRINGS.SAHARSH_SOFTWARE, link: ROUTE_CONSTANTS.HOME },
  { label: STRINGS.PROJECTS, link: ROUTE_CONSTANTS.PROJECTS },
];

function openLink(url: string) {
  window.open(url, "_blank");
}

</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Some Of Our Projects</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <template v-if="isLoading || !formattedProjectImage">
    <Loader />
  </template>
  <template v-if="formattedProjectImage">
    <!-- <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <div v-for="(item, index) in formattedProjectImage?.client_projects" :key="index">
        <DisplayProjectInfo :item="item" :isDesktop="isDesktop" :isTablet="isTablet" />
      </div>
    </section> -->
    <section ref="el" class="flex flex-col common-padding gap-8 py-4">

    <CustomTable
      :tableHeader="['Project', 'Client', 'Live URL']"
      :tableData="[...formattedProjectImage?.client_projects]"
    >
      <!-- Custom template for tbody rows -->
      <template v-slot:tbodyRow="{ row }">
        <tr>
          <td class="common-td">{{ row.project_name }}</td>
          <td class="common-td" >{{ row.client }}</td>
          <td class="link link-primary common-td" @click="() => openLink(row?.project_link)"> Link</td>
          <!-- <td>{{ row.location }}</td>
          <td>{{ row.lastLogin }}</td>
          <td>{{ row.favoriteColor }}</td> -->
          <!-- Add more customizations as needed -->
        </tr>
      </template>
    </CustomTable>
    </section>
    
  </template>
</template>

<style scoped></style>
