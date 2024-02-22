<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import { getParentProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";

// components
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import { useRouter } from "vue-router";
import RenderDataResponse from "../atoms/RenderDataResponse.vue";
import { IMAGES } from "../../shared/images";
import ActionButton from "../atoms/ActionButton.vue";

const router = useRouter();
const { data: parentProjects, isLoading } = useQuery({
  queryKey: ["parent_projects"],
  queryFn: () =>
    getParentProjectImagesRequest({
      params: { populate: "*" },
    }),
});

const formattedParentProject = computed(() => {
  return parentProjects.value?.data ?? {};
});

const el = ref(null);

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

const onProjectClick = (data: any) => {
  const { id } = data;
  const { slug } = data?.attributes;
  console.log(data, id);
  router.push(ROUTE_CONSTANTS.PROJECT_MODULES + "/" + slug);
};
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Some Of Our Projects</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>

  <section ref="el" class="flex flex-col common-padding gap-8 py-4">
    <RenderDataResponse
      :isLoading="isLoading"
      :responseData="formattedParentProject"
    >
      <div class="grid lg:grid-cols-3 gap-4">
        <div
          v-for="(data, index) in formattedParentProject"
          :key="index"
          class="flex flex-col gap-4 border shadow-md p-2 rounded"
        >
          <em class="h-1/2 w-full max-h-60">
            <img
              class="w-full h-full bg-contain relative rounded-lg aspect-video"
              :src="
                data?.attributes?.image?.data?.attributes?.url ??
                IMAGES.imagePlaceholder
              "
            />
          </em>
          <div class="flex justify-between items-center gap-4">
            <div class="text-2xl">
              {{ data?.attributes?.label }}
            </div>
          </div>
          <div class="flex flex-col gap-4 flex-1">
            <div class="flex gap-2 italic">
              <div class="font-bold">Total modules</div>
              {{ data?.attributes?.organisation_projects?.data?.length }}
            </div>
            <div>
              {{ data?.attributes?.desc }}
            </div>
          </div>
          <ActionButton 
            :button-label="'Read more'"
            @click="() => onProjectClick(data)"
          />
        </div>
      </div>
    </RenderDataResponse>
  </section>
</template>

<style scoped></style>
