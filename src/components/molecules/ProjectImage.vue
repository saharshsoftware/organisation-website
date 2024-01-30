<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import { getProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";

// components
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import Loader from "../atoms/Loader.vue";
import CustomTable from "../atoms/CustomTable.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { data: aboutData, isLoading } = useQuery({
  queryKey: ["project_image"],
  queryFn: () =>
    getProjectImagesRequest({
      params: { populate: "" },
    }),
});

const formattedProjectImage = computed(() => {
  return aboutData.value?.data ?? {};
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

function openLink(url: string) {
  window.open(url, "_blank");
}

const onProjectClick = (data: any) => {
  const { id } = data;
  console.log(data, id)
  router.push(ROUTE_CONSTANTS.PROJECTS + "/" + id);
};
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

    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <CustomTable
        :tableHeader="['Project', 'Client', 'Live URL', 'Details']"
        :tableData="formattedProjectImage"
      >
        <template v-slot:tbodyRow="{ row }">
          <tr>
            <td class="common-td">{{ row.attributes?.project_name }}</td>
            <td class="common-td">{{ row.attributes?.client }}</td>
            <td
              class="link link-primary common-td"
              @click="() => openLink(row?.attributes?.project_link)"
            >
              <a class="link link-primary"> Link </a>
            </td>
            <td class="common-td" @click="() => onProjectClick(row)">
              <a class="link link-primary"> Read More </a>
            </td>
          </tr>
        </template>
      </CustomTable>
    </section>
  </template>
</template>

<style scoped></style>
