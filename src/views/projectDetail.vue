<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { useResizeObserver } from "@vueuse/core";
import { ref, computed } from "vue";

// services
import { getProjectDetail } from "../services/projectImages";
import { ROUTE_CONSTANTS } from "../shared/route";

// components
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import Loader from "../components/atoms/Loader.vue";
import DisplayProjectInfo from "../components/atoms/DisplayProjectInfo.vue";

const route = useRoute();

const { isLoading, data: blogData } = useQuery({
  queryKey: ["project-detail", route.params?.id],
  queryFn: () =>
    getProjectDetail({ params: { populate: "*" }, id: route.params?.id }),
  enabled: !!route.params?.id,
});

const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Projects", link: ROUTE_CONSTANTS.PROJECTS },
]);

const formattedProjectImage = computed(() => {
  return blogData.value?.data?.attributes ?? {};
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
</script>

<template>
  <template v-if="isLoading || !formattedProjectImage">
    <Loader />
  </template>
  <template v-else>
    <section class="common-padding py-9 relative bg-primary-color">
      <div class="text-white flex flex-col items-start justify-between gap-5">
        <h2 class="text-3xl" ref="breadCrumb">Project</h2>
        <BreadCrumbs :breadcrumbList="breadcrumbs" />
      </div>
    </section>
    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <DisplayProjectInfo
        :item="formattedProjectImage"
        :isDesktop="isDesktop"
        :isTablet="isTablet"
      />
    </section>
  </template>
</template>

<style scoped></style>
