<script setup lang="ts">
import { computed, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import {
  getProjectDetail,
  getProjectImagesRequest,
} from "../services/projectImages";
import { ROUTE_CONSTANTS } from "../shared/route";

// components
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import { useRoute } from "vue-router";
import DisplayProjectInfo from "../components/atoms/DisplayProjectInfo.vue";
import RenderDataResponse from "../components/atoms/RenderDataResponse.vue";
import { SKELTON_TYPE } from "../shared/constants";

const route = useRoute();
const slugId = ref(null);
const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Projects", link: ROUTE_CONSTANTS.PROJECTS },
]);

const {
  data: projectModules,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["project_module_details"],
  queryFn: async () => {
    const res = await getProjectDetail({
      params: { populate: "*" },
      id: slugId.value,
    });
    if (res) {
      const { data } = res?.data?.attributes?.parent_project;
      const { slug } = res?.data?.attributes;
      const { slug: pslug } =
        res?.data?.attributes?.parent_project?.data?.attributes;
      breadcrumbs.value.push(
        {
          label: data?.attributes?.label ?? "",
          link: ROUTE_CONSTANTS.PROJECT_MODULES + "/" + pslug,
        },
        {
          label: res?.data?.attributes?.project_name ?? "",
          link: ROUTE_CONSTANTS.PROJECT_MODULE_DETAIL + "/" + slug,
        }
      );
    }
    return res;
  },
  enabled: false,
});

const { data } = useQuery({
  queryKey: ["all-project-modules"],
  queryFn: async () => {
    const res = await getProjectImagesRequest({
      params: { populate: "*" },
    });
    if (res) {
      const slugData = res?.data?.find(
        (item: any) => item?.attributes?.slug === route?.params?.id
      );
      console.log(slugData);
      slugId.value = slugData?.id;
      refetch();
    }
    return res;
  },
});

console.log(data);
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
  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse
      :isLoading="isLoading || !formattedProjectModules?.attributes"
      :responseData="formattedProjectModules"
      :skelton-type="SKELTON_TYPE.PROJECT_MODULE_DETAIL"
    >
      <DisplayProjectInfo :item="formattedProjectModules?.attributes" />
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
