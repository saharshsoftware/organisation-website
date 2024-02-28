<script setup lang="ts">
import { toRefs } from "vue";
import { SKELTON_TYPE } from "../../shared/constants";
import ProjectCardSkelton from "../molecules/skeltons/ProjectCardSkelton.vue";
import ProjectModuleSkelton from "../molecules/skeltons/ProjectModuleSkelton.vue";
import ProjectModuleDetail from "../molecules/skeltons/ProjectModuleDetail.vue";
import BlogDetailSkelton from "../molecules/skeltons/BlogDetailSkelton.vue";

interface Props {
  skeltonType?: string;
}
const props = defineProps<Props>();
const { skeltonType } = toRefs(props);
console.log(skeltonType.value, "skelton")
</script>
<template>
  <div class="flex flex-col items-center justify-center py-4 min-h-3">
    <template v-if="skeltonType === SKELTON_TYPE.PROJECT_CARD">
      <ProjectCardSkelton />
    </template>
    <template v-else-if="skeltonType === SKELTON_TYPE.PROJECT_MODULE">
      <ProjectModuleSkelton />
    </template>
    <template v-else-if="skeltonType === SKELTON_TYPE.PROJECT_MODULE_DETAIL">
      <ProjectModuleDetail />
    </template>
    <template v-else-if="skeltonType === SKELTON_TYPE.BLOG_DETAIL">
      <BlogDetailSkelton />
    </template>
    <template v-else>
      <div className="skeleton w-full h-32"></div>
    </template>
  </div>
</template>
