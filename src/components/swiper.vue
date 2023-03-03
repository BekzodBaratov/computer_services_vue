<template>
  <Swiper
    :navigation="true"
    :lazy="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      240: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
      1280: { slidesPerView: 5, spaceBetween: 20 },
      1536: { slidesPerView: 6, spaceBetween: 30 },
    }"
    :modules="[Navigation, Lazy]"
    class="swiperCardComp max-h-[34rem]"
  >
    <SwiperSlide v-for="product in products" :key="product.id">
      <Card :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import Card from "./card.vue";
import { computed } from "vue";

const props = defineProps(["products"]);
const products = computed(() => props.products);
</script>
