<template>
    <HeroSectionSlot>
      <div class="flex flex-col gap-[33px] items-start justify-center ">
        <div class="pr-[9px] pl-[9px] flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
          <div
            class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-5xl font-normal relative self-stretch flex-1 md:w-[48vw] ">
            We design and engineer the most user centric software products
          </div>
        </div>
        <div class="flex lg:flex-row flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
          <div class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative">
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch">
              Rare blend of passion and experience
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch">
              Our process and people are perfected with decade of experience to
              craft the most beautiful products
            </div>
          </div>
          <div class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative">
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch">
              Robust product engineering
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch ">
              Our constant investment in R&amp;D tools helps to deliver high
              quality product with rapid iteration
            </div>
          </div>
          <div class="pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2.5 items-start justify-start flex-1 relative">
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-5 font-normal relative self-stretch">
              Power up your team with best talent
            </div>
            <div class="bg-[#ffffff] self-stretch shrink-0 h-px relative"></div>
            <div
              class="text-[#ffffff] text-left font-['Montserrat-Regular',_sans-serif] text-base leading-6 font-normal relative self-stretch">
              Only top 1% of engineers are handpicked to work on your products
            </div>
          </div>
        </div>
      </div>
    </HeroSectionSlot>
    <TrustedPartner />
    <JoinTeam />
    <OurBlogs />
</template>

<script setup lang="ts">
import OurBlogs from '../components/molecules/OurBlogs.vue'
import JoinTeam from '../components/molecules/JoinTeam.vue';
import TrustedPartner from '../components/molecules/TrustedPartner.vue';
import HeroSectionSlot from '../components/atoms/HeroSectionSlot.vue';
</script>

<style scoped>

</style>