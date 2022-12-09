<template>
  <div v-for="(val, key) in store.cardSwiper" :key="key">
    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4F87D3] font-semibold pl-4">
      {{ val[0] }}
      <i class="pl-3 translate-y-[2px] fa-sharp fa-solid fa-arrow-right-long"></i>
    </p>
    <Swiper
      :navigation="true"
      :lazy="true"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        240: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
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
      <SwiperSlide v-for="(val, key) in val[1]" :key="key" class="bg-white h-full rounded-3xl">
        <RouterLink :to="'/shop/' + key">
          <div class="imgCard p-2">
            <img class="w-full swiper-lazy" src="../../assets/img/magazin/card/Rectangle 64.png" :alt="val.name" />
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
          <div class="context px-2 py-4 bg-[#e7f0fe99] rounded-3xl h-full space-y-2">
            <div class="flex justify-between items-center flex-wrap">
              <div class="text-[#4F87D3]">{{ val.rating }}</div>
              <div class="text-[#4F87D3]">{{ val.review }} отзывов</div>
            </div>
            <div>{{ val.name }}</div>
            <div>{{ val.typeOfMoney }}</div>
            <div class="flex justify-between items-center flex-wrap">
              <div class="font-semibold">{{ val.cost }} {{ val.currency }}</div>
              <div>
                <button class="border rounded-xl text-[#4F87D3] border-[#4F87D3] py-1 px-3">В корзину</button>
              </div>
            </div>
          </div>
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { shopStore } from "../../store/shop";
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
// import "./SwiperCard.css";

import { Navigation, Lazy } from "swiper";
const store = shopStore();

// function handleRating(val) {
//   if (val.rating === 2) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//       </>
//     );
//   } else if (val.rating === 2.5) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star-half-stroke"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//       </>
//     );
//   } else if (val.rating === 3) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//       </>
//     );
//   } else if (val.rating === 3.5) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star-half-stroke"></i>
//         <i class="fa-regular fa-star"></i>
//       </>
//     );
//   } else if (val.rating === 4) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star"></i>
//       </>
//     );
//   } else if (val.rating === 4.5) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-regular fa-star-half-stroke"></i>
//       </>
//     );
//   } else if (val.rating === 5) {
//     return (
//       <>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//       </>
//     );
//   }
// }
</script>
