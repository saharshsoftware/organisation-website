  <script setup lang="ts">
  import {IMAGES} from "../../shared/images"
  </script>
<template>
    <section
      class="bg-[#0a102d] common-padding md:py-36 py-9  relative"
    >
      <div
        class="flex flex-col gap-[33px] items-start justify-center "
      >
        <div
          class="pr-[9px] pl-[9px] flex flex-row gap-2.5 items-center justify-center shrink-0 relative"
        >
          <div
            class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-[40px] leading-[45px] font-normal relative self-stretch flex-1"
          >
            We design and engineer the most user centric software products
          </div>
        </div>
        <div
          class="flex lg:flex-row flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
        >
          <div
            class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch"
            >
              Rare blend of passion and experience
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch"
            >
              Our process and people are perfected with decade of experience to
              craft the most beautiful products
            </div>
          </div>
          <div
            class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch"
            >
              Robust product engineering
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch "
            >
              Our constant investment in R&amp;D tools helps to deliver high
              quality product with rapid iteration
            </div>
          </div>
          <div
            class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative"
          >
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch"
            >
              Power up your team with best talent
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch"
            >
              Only top 1% of engineers are handpicked to work on your products
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Section -->
        <section
      class="p-6 flex lg:flex-row flex-col items-center justify-between relative gap-8"
    >
      <div
        class="text-[#040f56] text-left font-['Montserrat-Regular',_sans-serif] text-[22px] leading-[26.4px] font-normal relative w-[300px]"
      >
        Trusted by Executives &amp; Entrepreneurs from
      </div>
      <div
        class="gap-8 flex items-center justify-between md:flex-row flex-col relative flex-1 w-full"
      >
        <img class="shrink-0 w-[156px] h-[52px] relative" :src=IMAGES.image1 alt="f1"/>
        <img class="shrink-0 w-[156px] h-[41px] relative" :src=IMAGES.image2 alt="f2"/>
        <img class="shrink-0 w-[156px] h-[47px] relative" :src=IMAGES.image3 alt="f3"/>
        <img class="shrink-0 w-16 h-16 relative" :src=IMAGES.image4 alt="f4"/>
      </div>
    </section>
</template>


<style scoped>

</style>