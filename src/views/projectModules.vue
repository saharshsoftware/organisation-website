<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import MarkdownIt from "markdown-it";

// sercices
import {
  getParentProjectDetail,
  getParentProjectImagesRequest,
} from "../services/projectImages";
import { ROUTE_CONSTANTS } from "../shared/route";

// components
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import { useRoute, useRouter } from "vue-router";
import ProjectModuleCard from "../components/atoms/ProjectModuleCard.vue";
import RenderDataResponse from "../components/atoms/RenderDataResponse.vue";
import { SKELTON_TYPE } from "../shared/constants";

const router = useRouter();
const route = useRoute();
const slugId = ref(null);
const imagelogoref = ref<any>(null);
const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Projects", link: ROUTE_CONSTANTS.PROJECTS },
]);

const renderMarkdown = (markdown: any) => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });
  return md.render(markdown);
};

const {
  data: projectModules,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["project_modules"],
  queryFn: async () => {
    const res = await getParentProjectDetail({
      params: { populate: "organisation_projects.image" },
      id: slugId.value,
    });
    if (res) {
      console.log(res, ":ASDf");
      breadcrumbs.value.push({
        label: res?.data?.attributes?.label ?? "",
        link:
          ROUTE_CONSTANTS.PROJECT_MODULES + "/" + res?.data?.attributes?.slug,
      });
    }
    return res;
  },
  enabled: false,
});

const { data } = useQuery({
  queryKey: ["parent_projects"],
  queryFn: async () => {
    const res = await getParentProjectImagesRequest({
      params: { populate: "*" },
    });
    if (res) {
      const slugData = res?.data?.find(
        (item: any) => item?.attributes?.slug === route?.params?.id
      );
      imagelogoref.value = slugData.attributes.image;
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

const onProjectClick = (data: any) => {
  const { slug } = data;
  router.push(ROUTE_CONSTANTS.PROJECT_MODULE_DETAIL + "/" + slug);
};

onBeforeUnmount(() => {
  breadcrumbs.value = [];
});
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <div class="flex justify-start items-start gap-4">
        <h2 class="text-3xl" ref="breadCrumb">
          {{ formattedProjectModules?.attributes?.label }}
        </h2>
        <em class="max-h-72" v-if="!!imagelogoref?.data?.attributes?.url">
          <img
            class="w-full h-10 bg-contain relative rounded-lg aspect-video"
            :src="imagelogoref?.data?.attributes?.url ?? ''"
          />
        </em>
      </div>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>

  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse
      :isLoading="isLoading || !formattedProjectModules?.attributes"
      :responseData="formattedProjectModules"
      :skelton-type="SKELTON_TYPE.PROJECT_MODULE"
    >
      <div
        v-if="formattedProjectModules?.attributes?.desc"
        class="text-left text-base leading-[30px] font-normal relative self-stretch blog-json-class flex flex-col gap-4"
        v-html="renderMarkdown(formattedProjectModules?.attributes?.desc)"
      ></div>

      <div class="grid grid-cols-1 gap-4">
        <div
          v-for="(data, index) in formattedProjectModules?.attributes
            ?.organisation_projects?.data"
          :key="index"
          class="flex flex-col gap-6 border shadow-md p-8 rounded"
        >
          <ProjectModuleCard
            :data="data?.attributes"
            v-on:click-event="onProjectClick"
          />
        </div>
      </div>
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
