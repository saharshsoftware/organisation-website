<script setup lang="ts">
import { toRefs } from "vue";

// shareds
import { IMAGES } from "../../shared/images"
import { sanitizeStrapiImageUrl } from "../../shared/utilies";

interface Props {
  author: string,
  content: string,
  image_url?: string,
}

const props = defineProps<Props>();

const { author, content, image_url } = toRefs(props);

</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-12">
      <figure class="mx-auto max-w-screen-md">
        <svg
          class="mx-auto mb-3 h-12 text-gray-400"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote>
          <p class="text-lg font-medium text-gray-900">"{{ content }}"</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center justify-center space-x-3">
          <img
            class="h-6 w-6 rounded-full"
            :src="sanitizeStrapiImageUrl(image_url) ?? IMAGES.imagePlaceholder"
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 divide-gray-500">
            <div class="pr-3 font-medium text-gray-900">{{ author }}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped></style>
