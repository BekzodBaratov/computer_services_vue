<template>
  <Swiper
    :navigation="true"
    :lazy="true"
    :loop="true"
    :slidesPerView="6"
    :loopFillGroupWithBlank="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      240: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
      1280: { slidesPerView: 5, spaceBetween: 20 },
      1636: { slidesPerView: 6, spaceBetween: 35 },
    }"
    :modules="[Navigation, Lazy]"
    class="swiperCardComp max-h-[34rem]"
  >
    <slot></slot>
  </Swiper>
</template>

<script setup>
import { Swiper } from "swiper/vue";
import { Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
</script>
