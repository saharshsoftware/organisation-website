<script setup lang="ts">
import logo from "../../assets/images/SAHARSH-SOFTWARE-3.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RouterLink, useRoute } from "vue-router";
import { NAV_LINK } from "../../shared/constants";
import { ref } from "vue";

const isMobileViewVisible = ref(false);
const route = useRoute();

const toggleMobileView = () => {
  isMobileViewVisible.value = !isMobileViewVisible.value;
};
</script>
<template>
  <div class="bg-primary-color common-padding">
    <div
      class="flex flex-row items-center justify-between relative w-full h-[116px]"
    >
      <RouterLink class="cursor-pointer" to="/">
        <img class="shrink-0 h-[46px] relative" :src="logo" alt="image-add" />
      </RouterLink>
      <div
        class="lg:flex flex-row gap-8 items-start justify-start shrink-0 relative hidden"
      >
        <div
          v-for="(link, index) in NAV_LINK"
          :key="index"
          class="text-white text-left font-['DmSans-Regular',_sans-serif]  leading-5 font-semibold text-sm relative nav-link"
          :class="{ active: route.path === link.path }"
        >
          <RouterLink class="cursor-pointer" :to="link.path">
           {{ link.label }}
          </RouterLink>
        </div>
      </div>

      <div class="lg:hidden cursor-pointer">
        <font-awesome-icon
          :icon="faBars"
          color="#fff"
          @click="toggleMobileView"
        />
      </div>
    </div>
    <!-- Mobile View -->
    <div
      v-if="isMobileViewVisible"
      class="lg:hidden flex flex-col gap-8 items-center justify-center shrink-0 absolute top-[20] left-0 right-0 z-10 bg-[#fff] text-black py-6"
    >
      <div
        v-for="(link, index) in NAV_LINK"
        :key="index"
        class="text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-bold relative nav-link"
        :class="{ active: route.path === link.path }"
      >
        <RouterLink
          class="cursor-pointer"
          :to="link.path"
          @click="toggleMobileView"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  padding-left: 0;
  padding-right: 0;
  line-height: 1.3;
  cursor: pointer;
  position: relative;
  padding-bottom: 5px;
}

.nav-link::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 1px;
  width: 0;
  transition: width 0.5s ease-in-out;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
  background: #3DA6E0;
}
</style>
