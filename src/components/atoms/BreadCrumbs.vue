<script setup lang="ts">
import { toRef } from "vue";

interface breadItems {
  link: string;
  label: string;
}

interface IBreadCrumb {
  breadcrumbList: breadItems[];
}

const props = defineProps<IBreadCrumb>();
const breadcrumbList = toRef(props.breadcrumbList);
</script>
<template>
  <div>
    <div className="text-sm breadcrumbs">
      <ul v-if="breadcrumbList">
        <li v-for="(item, index) in breadcrumbList" :key="index">
          <RouterLink v-if="item.link" :to="item.link">{{ item.label }}</RouterLink>
          <span v-else>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
