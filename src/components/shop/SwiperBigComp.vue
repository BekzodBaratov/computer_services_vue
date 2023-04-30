<template>
  <div class="container mx-auto rounded-xl overflow-hidden">
    <swiper
      :centeredSlides="true"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :navigation="true"
      :slidesPerView="1"
      :spaceBetween="16"
      :pagination="{ clickable: true }"
      :modules="[Pagination, Navigation, Autoplay]"
      class="bannerSwiper swiperBigComp"
    >
      <swiper-slide
        class="rounded-xl overflow-hidden"
        v-if="store.banners.length"
        v-for="val in store.banners"
        :key="val.id"
      >
        <RouterLink class="block aspect-10/3" :to="`/shop/${val.productId}`">
          <img class="w-full h-full object-cover object-center" :src="val.imageUrl" :alt="val.title" />
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
import { Pagination, Navigation, Autoplay } from "swiper";
import { useBannerStore } from "../../store/banner";
const store = useBannerStore();
store.getAllBanners();
</script>

<style scoped>
.bannerSwiper {
  padding: 0;
}
</style>
