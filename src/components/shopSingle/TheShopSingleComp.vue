<template>
  <swiper
    :loop="true"
    :spaceBetween="15"
    :scrollbar="{ draggable: true }"
    :thumbs="{ swiper: thumbsSwiper }"
    :navigation="true"
    :modules="modules"
    class="singleSwiper rounded-3xl"
  >
    <swiper-slide v-for="(image, i) in props.images" :key="i" class="h-96">
      <img class="rounded-xl w-full h-full object-contain object-center bg-gray-500" :src="image" />
    </swiper-slide>
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
    <swiper-slide v-for="(image, i) in props.images" :key="i" class="h-40">
      <img class="rounded-xl w-full h-full object-cover object-center" :src="image" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => (thumbsSwiper.value = swiper);
const modules = ref([FreeMode, Thumbs, Navigation]);

const props = defineProps(["images"]);
</script>

<style type="tailwind" scoped>
.singleSwiper {
  padding: 0;
  padding-bottom: 1rem;
}
.singleThumbSwiper {
  padding: 0;
}
.singleSwiper .swiper-button-prev,
.singleSwiper .swiper-button-next {
  @apply hidden md:block;
}
</style>
