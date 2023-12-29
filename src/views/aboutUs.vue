<script setup lang="ts">
import BreadCrumbs from "../components/atoms/BreadCrumbs.vue";
import TwoSectionComponent from "../components/atoms/TwoSectionComponent.vue";

import { IMAGES } from "../shared/images";
import { ROUTE_CONSTANTS } from "../shared/route";
import { STRINGS } from "../shared/constants";
import { onMounted, ref } from "vue";
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
  { label: STRINGS.ABOUT_US, link: ROUTE_CONSTANTS.ABOUT },
];
</script>
<template>
  <section class="common-padding py-9 relative bg-primary-color">
    <div class="text-white flex flex-col items-start justify-between gap-5">
      <h2 class="text-3xl" ref="breadCrumb">About Us</h2>

      <BreadCrumbs :breadcrumbList="breadcrumbs" />
    </div>
  </section>
  <div class="m-auto" id="abc">
    <!-- :isReverse="true" -->
    <TwoSectionComponent
      :classLeft="'flex items-start justify-center text-pretty flex-col gap-4'"
      :classRight="'text-white bg-priamry-color bg-no-repeat bg-center bg-cover'"
    >
      <template #left>
        <h1 class="text-5xl heading">Our Mission</h1>

        <p class="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nobis
          molestias minus ipsam quos doloremque debitis vero sed est laboriosam
          illo atque eligendi excepturi autem numquam ex maxime, enim in dicta
          inventore architecto nihil molestiae provident? Amet a animi, porro et
          quaerat dolorum quibusdam quas reiciendis vitae praesentium ex.
          Fugiat!
        </p>
        <ul class="list-disc ms-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab step.
          </li>
        </ul>
      </template>
      <template #right>
        <img class="relative h-full" :src="IMAGES.mission" />
      </template>
    </TwoSectionComponent>
    <TwoSectionComponent
      :isReverse="true"
      :classLeft="'flex items-start justify-center text-pretty flex-col gap-4'"
      :classRight="'text-white bg-priamry-color bg-no-repeat bg-center bg-cover'"
    >
      <template #left>
        <h1 class="text-5xl heading">Our Vision</h1>

        <p class="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nobis
          molestias minus ipsam quos doloremque debitis vero sed est laboriosam
          illo atque eligendi excepturi autem numquam ex maxime, enim in dicta
          inventore architecto nihil molestiae provident? Amet a animi, porro et
          quaerat dolorum quibusdam quas reiciendis vitae praesentium ex.
          Fugiat!
        </p>
        <ul class="list-disc ms-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab step.
          </li>
        </ul>
      </template>
      <template #right>
        <img class="relative h-full" :src="IMAGES.lappy" />
      </template>
    </TwoSectionComponent>
    <TwoSectionComponent
      :classLeft="'flex items-start justify-center text-pretty flex-col gap-4'"
      :classRight="'text-white bg-priamry-color bg-no-repeat bg-center bg-cover'"
    >
      <template #left>
        <h1 class="text-5xl heading">Team Members</h1>

        <p class="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nobis
          molestias minus ipsam quos doloremque debitis vero sed est laboriosam
          illo atque eligendi excepturi autem numquam ex maxime, enim in dicta
          inventore architecto nihil molestiae provident? Amet a animi, porro et
          quaerat dolorum quibusdam quas reiciendis vitae praesentium ex.
          Fugiat!
        </p>
        <ul class="list-disc ms-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            amet unde inventore rerum accusamus enim repellendus iusto vero
            doloremque aperiam eum soluta voluptates ab step.
          </li>
        </ul>
      </template>
      <template #right>
        <img class="relative h-full" :src="IMAGES.aboutImg" />
      </template>
    </TwoSectionComponent>
    <!-- <img class="relative h-full" :src="IMAGES.aboutImg" /> -->
  </div>
</template>

<style scoped></style>
