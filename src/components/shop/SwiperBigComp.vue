<template>
  <swiper
    :slidesPerView="1.3"
    :centeredSlides="true"
    :loop="true"
    :navigation="true"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="[Pagination, Navigation]"
    class="mySwiper swiperBigComp"
  >
    <swiper-slide v-for="(val, i) in store.arr" :key="i">
      <RouterLink :to="val.link">
        <img class="w-full" src="../../assets/img/magazin/Group 2.png" alt="val" />
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import { RouterLink } from "vue-router";
import { shopStore } from "../../store/shop";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

const store = shopStore();
</script>

<style></style>

<!-- :breakpoints="{
  240: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
}" -->
