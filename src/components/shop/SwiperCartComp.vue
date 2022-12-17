<template>
  <div v-for="(val, key) in store.cardSwiper" :key="key">
    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4F87D3] font-semibold pl-4 pb-4">
      {{ val[0] }}
      <i class="pl-3 translate-y-[2px] fa-sharp fa-solid fa-arrow-right-long"></i>
    </p>
    <Swiper
      :navigation="true"
      :lazy="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        240: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
      :modules="[Navigation, Lazy]"
      class="swiperCardComp max-h-[34rem]"
    >
      <SwiperSlide v-for="(val, key) in val[1]" :key="key" class="bg-white h-full rounded-3xl">
        <RouterLink :to="'/shop/' + key">
          <div class="imgCard p-2">
            <img class="w-full swiper-lazy" src="../../assets/img/magazin/card/Rectangle 64.png" :alt="val.name" />
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
          <div class="context px-2 py-4 bg-[#e7f0fe99] rounded-3xl h-full space-y-2">
            <div class="flex justify-between items-center flex-wrap">
              <div class="text-[#4F87D3]">{{ val.rating }}</div>
              <div class="text-[#4F87D3]">{{ val.review }} отзывов</div>
            </div>
            <div class="duration-200 hover:text-[#002e69]">{{ val.name }}</div>
            <div>{{ val.typeOfMoney }}</div>
            <div class="flex justify-between items-center flex-wrap">
              <div class="font-semibold">{{ val.cost }} {{ val.currency }}</div>
              <div>
                <ButtonStrokeVue><span class="py-1">В корзину</span></ButtonStrokeVue>
              </div>
            </div>
          </div>
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { shopStore } from "../../store/shop";
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import { Navigation, Lazy } from "swiper";
const store = shopStore();
</script>
