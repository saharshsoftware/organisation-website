<script setup lang="ts">
import { computed, ref } from "vue";
import { STRINGS } from "../../shared/constants";
import { useRouter } from "vue-router";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/vue-query";
import { getOurOfferings } from "../../services/ourOfferings";
import Loader from "../atoms/Loader.vue";

const router = useRouter();
const trustedSection = ref<any>();

const { data, isLoading } = useQuery({
  queryKey: ["our-offerings"],
  queryFn: () => getOurOfferings({ params: { populate: "offers.image" } }),
});

const formattedData = computed(() => {
  return data.value?.data?.attributes?.offers ?? {};
});

const moveTo = (data: any) => {
  if (data?.route) {
    router.push(data?.route);
  }
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-between self-stretch shrink-0 relative gap-2.5"
  >
    <div
      ref="trustedSection"
      class="text-[#414562] text-center text-2xl leading-10 heading font-normal relative animate__animated"
    >
      {{ STRINGS.OUR_OFFERINGS }}
    </div>
    <template v-if="isLoading || !formattedData">
      <div class="w-full">
        <Loader />
      </div>
    </template>
    <template v-else>
      <div
        class="bg-[#252525] flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative"
      >
        <div class="flex lg:flex-row flex-col justify-between relative">
          <div
            class="relative lg:w-[50%] group"
            v-for="(item, index) in formattedData"
            :key="index"
          >
            <img
              class="inset-0 object-cover w-full min-h-80 group-hover:opacity-50"
              :src="item?.image?.data?.attributes.url"
            />
            <div class="common-padding common-info-section">
              <div class="font-bold text-2xl">{{ item.title }}</div>
              <p>{{ item.desc }}</p>
              <div class="learn-more-class" @click="() => moveTo(item)">
                <span>
                  {{ STRINGS.LEARN_MORE }}
                </span>
                <em>
                  <font-awesome-icon :icon="faRightLong" color="#fff" />
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.common-info-section {
  @apply flex flex-col items-start justify-between gap-6 absolute bottom-24 right-0 pt-10 text-white lg:text-base text-sm;
}

.learn-more-class {
  @apply cursor-pointer flex items-center gap-2;
}
</style>
