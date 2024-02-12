<script setup lang="ts">
import { computed, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import { getProjectDetail } from "../services/projectImages";
import { ROUTE_CONSTANTS } from "../shared/route";

// components
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import Loader from "../components/atoms/Loader.vue";
import { useRoute } from "vue-router";
import DisplayProjectInfo from "../components/atoms/DisplayProjectInfo.vue";

const route = useRoute();
const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Projects", link: ROUTE_CONSTANTS.PROJECTS },
]);

const { data: projectModules, isLoading } = useQuery({
  queryKey: ["project_module_details"],
  queryFn: async () => {
    const res = await getProjectDetail({
      params: { populate: "*" },
      id: route.params.id,
    });
    if (res) {
      const { data } = res?.data?.attributes?.parent_project;
      breadcrumbs.value.push(
        {
          label: data?.attributes?.label ?? "",
          link: ROUTE_CONSTANTS.PROJECT_MODULES + "/" + data?.id,
        },
        {
          label: res?.data?.attributes?.project_name ?? "",
          link: ROUTE_CONSTANTS.PROJECT_MODULE_DETAIL + "/" + res?.data?.id,
        }
      );
    }
    return res;
  },
});

const el = ref(null);

const formattedProjectModules = computed(() => {
  return projectModules.value?.data ?? {};
});
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">
        {{
          formattedProjectModules?.attributes?.parent_project?.data?.attributes
            ?.label
        }}
      </h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <template v-if="isLoading || !formattedProjectModules">
    <Loader />
  </template>
  <template v-else>
    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <DisplayProjectInfo :item="formattedProjectModules?.attributes" />
    </section>
  </template>
</template>

<style scoped></style>
