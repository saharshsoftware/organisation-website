<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import { getParentProjectImagesRequest } from "../../services/projectImages";
import { ROUTE_CONSTANTS } from "../../shared/route";
import { STRINGS } from "../../shared/constants";

// components
import BreadCrumbs from "../atoms/BreadCrumbs.vue";
import Loader from "../atoms/Loader.vue";
import CustomTable from "../atoms/CustomTable.vue";
import { useRouter } from "vue-router";

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
  console.log(data, id)
  router.push(ROUTE_CONSTANTS.PROJECT_MODULES + "/" + id);
};
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">Some Of Our Projects</h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <template v-if="isLoading || !formattedParentProject">
    <Loader />
  </template>
  <template v-else>

    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <CustomTable
        :tableHeader="['Clients', 'Total Modules', 'Details']"
        :tableData="formattedParentProject"
      >
        <template v-slot:tbodyRow="{ row }">
          <tr>
            <td class="common-td">{{ row.attributes?.label }}</td>
            <td class="common-td">{{ row.attributes?.organisation_projects?.data?.length }}</td>
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
