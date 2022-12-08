<template>
  <swiper
    :centeredSlides="true"
    :loop="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
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
    }"
    :modules="[Pagination, Navigation]"
    className="swiperBigComp"
  >
    <swiper-slide v-for="(val, key) in store.arr" :key="key" className="rounded-3xl">
      <RouterView :to="val.link">
        <img src="../../assets/img/magazin/Group 2.png" alt="rasm" />
      </RouterView>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { RouterView } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { shopStore } from "../../store/shop";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
const store = shopStore();
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  background-color: #aecbf4;
  border-radius: 50%;
  color: #002e69f2;
  width: 20px;
  height: 20px;
  padding: 1rem;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: 900;
}
.swiper {
  padding: 0 1rem;
  padding-bottom: 2.6rem;
}
.swiperBigComp .swiper-pagination-bullet {
  background-color: #00000061;
  width: 4rem;
  border-radius: 1rem;
}
.swiper-pagination-bullet-active {
  background-color: black;
}
.swiperCardComp .swiper-button-prev {
  display: none;
}

@media (min-width: 240px) {
  .swiperBigComp .swiper-pagination-bullet {
    width: 0.6rem;
    height: 0.3rem;
    border-radius: 0.4rem;
  }
}
@media (min-width: 768px) {
  .swiperBigComp .swiper-pagination-bullet {
    width: 1rem;
    height: 0.6rem;
    border-radius: 0.8rem;
  }
}
@media (min-width: 1024px) {
  .swiperBigComp .swiper-pagination-bullet {
    width: 2rem;
    border-radius: 1rem;
  }
}
@media (min-width: 1280px) {
  .swiperBigComp .swiper-pagination-bullet {
    width: 3rem;
    border-radius: 1rem;
  }
}
@media (min-width: 1536px) {
  .swiperBigComp .swiper-pagination-bullet {
    width: 4rem;
    border-radius: 1rem;
  }
}
</style>
