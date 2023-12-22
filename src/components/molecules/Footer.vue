<script setup lang="ts">
import logo from "../../assets/images/SAHARSH-SOFTWARE-3.png";
import { RouterLink } from "vue-router";
import { NAV_LINK } from "../../shared/constants";
</script>

<template>
  <div class="bg-primary-color flex flex-col gap-2.5 items-center justify-center p-6 relative">
    <div class="flex lg:flex-row flex-col gap-2.5 items-start justify-start shrink-0 w-[90%] relative">
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
        <img class="shrink-0 w-[180.32px] h-[52px] relative" :src="logo" />
        <div
          class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-[15px] leading-6 font-normal relative self-stretch">
          We work with leaders with extraordinary capabilities and leadership to
          create value and profitable businesses, often from ground up. We are
          the software engineering team behind products that touches millions of
          lives and generates millions in profits.
        </div>
        <div class=" flex flex-row gap-2.5 items-center justify-start shrink-0 h-[29px] relative">
          <svg class="flex flex-col gap-2.5 items-center justify-start shrink-0 h-[auto] relative overflow-visible"
            style="" width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.707458 14.5C0.707458 6.49187 7.19933 0 15.2075 0H28.0874C36.0956 0 42.5874 6.49187 42.5874 14.5V14.5C42.5874 22.5081 36.0956 29 28.0874 29H15.2074C7.19932 29 0.707458 22.5081 0.707458 14.5V14.5Z" />
            <path
              d="M27.3369 18.1489C29.4339 20.8002 30.3995 22.9731 29.912 23.9448C29.538 24.6821 27.228 26.1225 25.5286 26.6743C24.1275 27.1284 22.2909 27.3237 20.7761 27.1723C18.9679 26.9916 17.1359 26.3227 15.5644 25.268C14.2437 24.3793 13.9455 24.0131 13.9455 23.2856C13.9455 21.8256 15.5029 19.267 18.1679 16.3471C19.6826 14.6918 21.7891 12.7485 22.021 12.8022C22.466 12.9047 26.0115 16.4692 27.3369 18.1489ZM18.7548 9.63324C17.349 8.31976 16.0046 7.0014 14.665 6.53754C13.9455 6.28851 13.8934 6.30316 13.3065 6.93304C11.9242 8.41742 10.774 10.8246 10.4521 12.9096C10.1965 14.5795 10.1633 15.0483 10.2533 15.8637C10.5184 18.3295 11.0722 20.0336 12.1704 21.767C12.6201 22.4799 12.7432 22.6118 12.6106 22.2504C12.4118 21.7133 12.5964 20.4194 13.0603 19.1254C13.7372 17.2211 15.6117 13.6127 18.7548 9.63324ZM33.5048 12.7338C32.7048 8.82758 30.3096 6.37152 29.9735 6.37152C29.628 6.37152 28.828 6.6889 28.2694 7.05023C27.1665 7.75824 26.3286 8.58343 25.2257 9.62836C27.2327 12.2309 30.0634 16.435 31.0433 19.5063C31.3652 20.517 31.5025 21.5131 31.3936 22.06C31.3131 22.475 31.3131 22.475 31.4599 22.2846C31.7486 21.9086 32.4018 20.7563 32.6622 20.1606C33.0125 19.3696 33.3722 18.1977 33.5426 17.2944C33.7462 16.1957 33.7273 13.8373 33.5048 12.7338ZM16.5158 4.71136C18.7738 4.58929 21.7086 6.39593 21.9264 6.43988C21.9595 6.44476 22.4187 6.2348 22.9488 5.96625C25.9736 4.44769 27.3984 4.70648 28.0327 4.73578C25.0079 2.81683 20.8045 2.29437 16.9608 4.16449C15.8531 4.70648 15.8247 4.74554 16.5158 4.71136Z"
              fill="white" />
          </svg>

          <svg class="flex flex-col gap-2.5 items-center justify-start shrink-0 h-[auto] relative overflow-visible"
            style="" width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.587433 14.5C0.587433 6.49187 7.0793 0 15.0874 0H27.9674C35.9755 0 42.4674 6.49187 42.4674 14.5V14.5C42.4674 22.5081 35.9755 29 27.9674 29H15.0874C7.07929 29 0.587433 22.5081 0.587433 14.5V14.5Z" />
            <path
              d="M30.3615 4H12.1797C11.3466 4 10.6697 4.70801 10.6697 5.57715V24.2979C10.6697 25.167 11.3466 25.875 12.1797 25.875H30.3615C31.1946 25.875 31.8763 25.167 31.8763 24.2979V5.57715C31.8763 4.70801 31.1946 4 30.3615 4ZM17.079 22.75H13.9359V12.3105H17.0837V22.75H17.079ZM15.5074 10.8848C14.4992 10.8848 13.685 10.04 13.685 9.00488C13.685 7.96973 14.4992 7.125 15.5074 7.125C16.511 7.125 17.3299 7.96973 17.3299 9.00488C17.3299 10.0449 16.5157 10.8848 15.5074 10.8848ZM28.8609 22.75H25.7178V17.6719C25.7178 16.4609 25.6942 14.9033 24.0847 14.9033C22.4469 14.9033 22.196 16.2217 22.196 17.584V22.75H19.0529V12.3105H22.0682V13.7363H22.1108C22.5321 12.916 23.5593 12.0518 25.0883 12.0518C28.2692 12.0518 28.8609 14.2148 28.8609 17.0273V22.75Z"
              fill="white" />
          </svg>

          <svg class="flex flex-col gap-2.5 items-center justify-start shrink-0 h-[auto] relative overflow-visible"
            style="" width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.467407 14.5C0.467407 6.49187 6.95928 0 14.9674 0H27.8474C35.8555 0 42.3474 6.49187 42.3474 14.5V14.5C42.3474 22.5081 35.8555 29 27.8474 29H14.9674C6.95927 29 0.467407 22.5081 0.467407 14.5V14.5Z" />
            <path
              d="M33.6406 15.1094C33.6406 8.41992 28.3863 3 21.9012 3C15.4162 3 10.1618 8.41992 10.1618 15.1094C10.1618 21.1533 14.4548 26.1631 20.0669 27.0723V18.6099H17.0848V15.1094H20.0669V12.4414C20.0669 9.40674 21.8184 7.73047 24.5009 7.73047C25.7856 7.73047 27.129 7.9668 27.129 7.9668V10.9453H25.6483C24.1904 10.9453 23.7355 11.8789 23.7355 12.8364V15.1094H26.9913L26.4706 18.6099H23.7355V27.0723C29.3477 26.1631 33.6406 21.1533 33.6406 15.1094Z"
              fill="white" />
          </svg>

          <svg class="flex flex-row gap-2.5 items-center justify-start shrink-0 h-[auto] relative overflow-visible"
            style="" width="43" height="29" viewBox="0 0 43 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.2351 9.33081C18.2245 9.33081 15.7961 11.8357 15.7961 14.9412C15.7961 18.0466 18.2245 20.5515 21.2351 20.5515C24.2456 20.5515 26.674 18.0466 26.674 14.9412C26.674 11.8357 24.2456 9.33081 21.2351 9.33081ZM21.2351 18.5886C19.2896 18.5886 17.6991 16.9529 17.6991 14.9412C17.6991 12.9294 19.2848 11.2937 21.2351 11.2937C23.1853 11.2937 24.7711 12.9294 24.7711 14.9412C24.7711 16.9529 23.1806 18.5886 21.2351 18.5886ZM28.1651 9.10132C28.1651 9.82886 27.597 10.4099 26.8965 10.4099C26.1912 10.4099 25.6279 9.82397 25.6279 9.10132C25.6279 8.37866 26.1959 7.79272 26.8965 7.79272C27.597 7.79272 28.1651 8.37866 28.1651 9.10132ZM31.7674 10.4294C31.6869 8.67651 31.2987 7.12378 30.0538 5.84448C28.8136 4.56519 27.3083 4.16479 25.6089 4.0769C23.8575 3.97437 18.6079 3.97437 16.8565 4.0769C15.1618 4.15991 13.6566 4.5603 12.4116 5.8396C11.1667 7.1189 10.7832 8.67163 10.698 10.4246C10.5986 12.2312 10.5986 17.6462 10.698 19.4529C10.7785 21.2058 11.1667 22.7585 12.4116 24.0378C13.6566 25.3171 15.1571 25.7175 16.8565 25.8054C18.6079 25.908 23.8575 25.908 25.6089 25.8054C27.3083 25.7224 28.8136 25.322 30.0538 24.0378C31.294 22.7585 31.6822 21.2058 31.7674 19.4529C31.8668 17.6462 31.8668 12.2361 31.7674 10.4294ZM29.5047 21.3914C29.1355 22.3484 28.4207 23.0857 27.4882 23.4714C26.0918 24.0427 22.7782 23.9109 21.2351 23.9109C19.6919 23.9109 16.3736 24.0378 14.982 23.4714C14.0542 23.0906 13.3394 22.3533 12.9654 21.3914C12.4116 19.9509 12.5394 16.533 12.5394 14.9412C12.5394 13.3494 12.4163 9.92651 12.9654 8.49097C13.3347 7.53394 14.0494 6.79663 14.982 6.41089C16.3784 5.8396 19.6919 5.97144 21.2351 5.97144C22.7782 5.97144 26.0965 5.84448 27.4882 6.41089C28.416 6.79175 29.1307 7.52905 29.5047 8.49097C30.0585 9.9314 29.9307 13.3494 29.9307 14.9412C29.9307 16.533 30.0585 19.9558 29.5047 21.3914Z"
              fill="white" />
          </svg>
        </div>
      </div>
      <div class=" bg-[#262d50]  self-stretch shrink-0 w-[1.16px] relative"></div>
      <div class="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative">
        <div class="flex flex-row items-start justify-between self-stretch flex-1 relative">
          <div class="flex flex-col gap-2.5 items-start justify-start flex-1 relative">
            <div
              class="text-[#ffffff] text-left font-['Roboto-Regular',_sans-serif] text-lg leading-[22.5px] font-normal relative">
              Company
            </div>
            <div class="flex flex-col gap-3 items-start justify-start shrink-0 relative">
              <div v-for="(link, index) in NAV_LINK" :key="index"
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative">
                <RouterLink class="cursor-pointer" :to="link.path">
                  {{ link.label }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2.5 items-start justify-start flex-1 relative">
            <div
              class="text-[#ffffff] text-left font-['Roboto-Regular',_sans-serif] text-lg leading-[22.5px] font-normal relative">
              Industries
            </div>
            <div class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative">
                Capital Market
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative">
                Finance
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative">
                Energy
              </div>
              <div
                class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-base leading-5 font-normal relative">
                Healthcare
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#262d50]  self-stretch shrink-0 w-[1.16px] relative"></div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden">
        <div
          class="text-[#6e6e6e] text-left font-['DmSans-Regular',_sans-serif] text-[15px] leading-6 font-normal relative">
          We build technology that brings positive change
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary-color flex flex-col items-center justify-between relative">
    <div class="flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-24 relative">
      <div
        class="text-[#7a7a7a] text-left font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative">
        © 2023
      </div>
      <div
        class="text-white text-center font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative">
        Saharash Technologies
      </div>
      <div
        class="text-[#7a7a7a] text-center font-['DmSans-Regular',_sans-serif] text-sm leading-[25.6px] font-normal relative">
        All rights reserved
      </div>
    </div>
  </div>
</template>

<style scoped></style>
