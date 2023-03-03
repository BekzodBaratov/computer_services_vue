<template>
  <swiper
    :loop="true"
    :spaceBetween="15"
    :scrollbar="{ draggable: true }"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="singleSwiper rounded-3xl"
  >
    <swiper-slide v-for="i in 4"
      ><img class="rounded-xl w-full" src="/src/assets/img/magazin/single-swiper/Rectangle90.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="/src/assets/img/magazin/single-swiper/Rectangle90.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="/src/assets/img/magazin/single-swiper/Rectangle91.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="/src/assets/img/magazin/single-swiper/Rectangle92.png"
    /></swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="3"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="singleThumbSwiper"
  >
    <swiper-slide v-for="i in 4"
      ><img class="rounded-xl" src="/src/assets/img/magazin/single-swiper/Rectangle92.png"
    /></swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => (thumbsSwiper.value = swiper);
const modules = ref([FreeMode, Thumbs]);
</script>

<style scoped>
.singleSwiper {
  padding: 0;
  padding-bottom: 1rem;
}
.singleThumbSwiper {
  padding: 0;
}
</style>
