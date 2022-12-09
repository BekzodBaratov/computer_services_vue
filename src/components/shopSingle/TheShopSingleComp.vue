<template>
  <swiper
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="singleSwiper mb-4 rounded-2xl"
  >
    <swiper-slide
      ><img class="rounded-xl w-full" src="../../assets/img/magazin/single-swiper/Rectangle 91.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="../../assets/img/magazin/single-swiper/Rectangle 90.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="../../assets/img/magazin/single-swiper/Rectangle 91.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl w-full" src="../../assets/img/magazin/single-swiper/Rectangle 92.png"
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
    <swiper-slide
      ><img class="rounded-xl" src="../../assets/img/magazin/single-swiper/Rectangle 89.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl" src="../../assets/img/magazin/single-swiper/Rectangle 90.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl" src="../../assets/img/magazin/single-swiper/Rectangle 91.png"
    /></swiper-slide>
    <swiper-slide
      ><img class="rounded-xl" src="../../assets/img/magazin/single-swiper/Rectangle 92.png"
    /></swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => (thumbsSwiper.value = swiper);
const modules = ref([FreeMode, Navigation, Thumbs]);
</script>
