<script setup lang="ts" >
import { ref } from 'vue';

const timelineEvents = ref([
  {
    year: '1984',
    title: 'First Macintosh computer',
    description:
      "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
  },
  {
    year: '1998',
    title: 'iMac',
    description:
      "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms",
  },
  {
    year: '2001',
    title: 'iPod',
    description:
      "The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple",
  },
  {
    year: '2007',
    title: 'iPhone',
    description:
      "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share",
  },
  {
    year: '2015',
    title: 'Apple Watch',
    description:
      "The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services",
  },
]);
</script>

<template>
  <div>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(event, index) in timelineEvents" :key="index">
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div :class="index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'">
          <time class="font-mono italic">{{ event.year }}</time>
          <div class="text-lg font-black">{{ event.title }}</div>
          <p>{{ event.description }}</p>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>


<style scoped>

</style>