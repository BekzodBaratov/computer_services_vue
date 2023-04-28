<template>
  <div class="mx-28 rounded-xl overflow-hidden">
    <swiper
      :centeredSlides="true"
      :loop="true"
      :navigation="true"
      :slidesPerView="1"
      :pagination="{
        clickable: true,
      }"
      :autoPlay="{
        delay: 2000,
      }"
      :modules="[Pagination, Navigation]"
      class="mySwiper swiperBigComp"
    >
      <swiper-slide v-if="store.banners.length" v-for="val in store.banners" :key="val.id">
        <RouterLink :to="`/shop/${val.productId}`">
          <img class="w-full object-cover object-center" :src="val.imageUrl" :alt="val.title" />
        </RouterLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import { RouterLink } from "vue-router";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { useBannerStore } from "../../store/banner";
const store = useBannerStore();
store.getAllBanners();
</script>
