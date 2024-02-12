<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";

// sercices
import { getParentProjectDetail } from "../services/projectImages";
import { ROUTE_CONSTANTS } from "../shared/route";

// components
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import Loader from "../components/atoms/Loader.vue";
import CustomTable from "../components/atoms/CustomTable.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const { data: projectModules, isLoading } = useQuery({
  queryKey: ["project_modules"],
  queryFn: async () => {
    const res = await getParentProjectDetail({
      params: { populate: "*" },
      id: route.params.id,
    });
    if (res) {
      breadcrumbs.value.push({
        label: res?.data?.attributes?.label ?? "",
        link: ROUTE_CONSTANTS.PROJECT_MODULES + "/" + res?.data?.id,
      });
    }
    return res;
  },
  enabled: !!route.params.id,
});

const el = ref(null);
const breadcrumbs = ref([
  { label: "Saharsh Software", link: ROUTE_CONSTANTS.HOME },
  { label: "Projects", link: ROUTE_CONSTANTS.PROJECTS },
]);

const formattedProjectModules = computed(() => {
  return projectModules.value?.data ?? {};
});

function openLink(url: string) {
  window.open(url, "_blank");
}

const onProjectClick = (data: any) => {
  const { id } = data;
  console.log(data, id);
  router.push(ROUTE_CONSTANTS.PROJECT_MODULE_DETAIL + "/" + id);
};

onBeforeUnmount(() => {
  breadcrumbs.value = [];
});
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">
        {{ formattedProjectModules?.attributes?.label }}
      </h2>
      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <template v-if="isLoading || !formattedProjectModules">
    <Loader />
  </template>
  <template v-else>
    <section ref="el" class="flex flex-col common-padding gap-8 py-4">
      <CustomTable
        :tableHeader="['Modules', 'Link', 'Details']"
        :tableData="
          formattedProjectModules?.attributes?.organisation_projects?.data
        "
      >
        <template v-slot:tbodyRow="{ row }">
          <tr>
            <td class="common-td">{{ row.attributes?.project_name }}</td>
            <template v-if="row?.attributes?.project_link">
              <td
                class="link link-primary common-td"
                @click="() => openLink(row?.attributes?.project_link)"
              >
                <a class="link link-primary"> Link </a>
              </td> </template
            ><template v-else>
              <td class="common-td">-</td>
            </template>
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
