<template>
  <!-- <Swiper
    :navigation="true"
    :lazy="true"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      240: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3.5,
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
    <SwiperSlide class="bg-white h-full rounded-3xl"> </SwiperSlide>
  </Swiper> -->

  <customSwiper>
    <SwiperSlide v-for="product in store.smilarProducts">
      <Card :product="product" />
    </SwiperSlide>
  </customSwiper>
</template>

<script setup>
import { useProductDetailStore } from "../../store/productDetail";
import { SwiperSlide } from "swiper/vue";
import customSwiper from "../swiper.vue";
import Card from "../card.vue";

const store = useProductDetailStore();
</script>
