<template>
  <div v-for="val in storeProduct.categories" :key="val.id">
    <RouterLink :to="`/shop/category/?category=${val.name}`" class="category-title group">
      {{ val.name }}
      <i class="fa-sharp fa-solid fa-arrow-right-long category-icon"></i>
    </RouterLink>
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
      <SwiperSlide v-for="product in val.products" :key="product.id" class="bg-white h-full rounded-3xl">
        <div class="imgCard p-2">
          <img class="w-full swiper-lazy" :src="product.image_url" alt="product_iamge" />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
        <div class="context px-2 py-4 bg-[#e7f0fe99] rounded-3xl h-full space-y-2">
          <div class="flex justify-between">
            <div class="flex gap-1">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-primaryBlue"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <p class="font-bold text-primaryBlue">{{ product.rating }}</p>
            </div>
            <p class="font-medium text-primaryBlue">{{ product.review }} отзывов</p>
          </div>
          <RouterLink :to="'/shop/' + product.id">
            <div class="duration-200 hover:text-primary line-clamp-2">{{ product.name }}</div>
          </RouterLink>

          <div>UZS</div>
          <div class="flex justify-between items-center flex-wrap">
            <div class="font-semibold">{{ val.cost }} {{ val.currency }}</div>
            <div>
              <ButtonStrokeVue><span class="py-1">В корзину</span></ButtonStrokeVue>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from "vue-router";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";
import { useMainProducts } from "../../store/mainProducts";
import { Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

const storeProduct = useMainProducts();

if (!storeProduct.categories.length) storeProduct.getAllProductsByCategory();
</script>

<style>
.category-title {
  @apply inline text-2xl lg:text-3xl text-primaryBlue font-semibold pl-4 pb-4 line-clamp-1;
}
.category-icon {
  @apply pl-3 translate-y-[2px] group-hover:translate-x-3 duration-200;
}
</style>
