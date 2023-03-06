<template>
  <SearchFormComp />
  <div class="container mx-auto">
    <RouteLink class="mb-3 text-base" :route="routeLink" />
    <h2 class="hidden lg:block text-xl mb-2 text-[#4F87D3CC]">{{ product.name }}</h2>
    <!-- <h1 class="text-2xl mb-3 text-primary">{{ singleObj.name }}</h1> -->
    <div class="flex items-center">
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
      <p class="ml-2 font-bold text-primaryBlue">{{ product.avg_rating }}</p>
      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
      <a href="#" class="font-medium text-primaryBlue underline hover:no-underline">
        {{ product.reviews ? product.reviews.length : 0 }} отзывов
      </a>
    </div>
    <div class="singleComp grid grid-cols-12 gap-8 my-8">
      <div class="swiperImg col-span-12 md:col-span-5"><TheShopSingleComp :images="store.images" /></div>
      <div class="content col-span-12 md:col-span-7"><SingleContentComp /></div>
    </div>
    <div class="moreInfo">
      <div class="flex gap-4 mb-6">
        <button
          @click="infomations = 0"
          class="font-bold border-b py-1"
          :class="infomations === 0 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
        >
          Описание
        </button>
        <button
          @click="infomations = 1"
          class="font-bold border-b py-1"
          :class="infomations === 1 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
        >
          Обзоры
        </button>
        <button
          @click="infomations = 2"
          class="font-bold border-b py-1"
          :class="infomations === 2 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
        >
          Отзывы
        </button>
      </div>
      <div>
        <Comment v-if="infomations === 0 || infomations === 1" />
        <!-- <Info v-if="infomations === 1" /> -->
        <UserCommit v-if="infomations === 2" />
      </div>
    </div>
    <div class="my-10">
      <h3 class="text-3xl text-primary pb-4">Похожие товары</h3>
      <SmilarsCompVue />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "../store/productDetail";
import RouteLink from "../components/RouteLink.vue";
import SearchFormComp from "../components/shop/SearchFormComp.vue";
import TheShopSingleComp from "../components/shopSingle/TheShopSingleComp.vue";
import SingleContentComp from "../components/shopSingle/SingleContentComp.vue";
import Comment from "../components/shopSingle/Comment.vue";
// import Info from "../components/shopSingle/Info.vue";
import UserCommit from "../components/shopSingle/UserCommit.vue";
import SmilarsCompVue from "../components/shopSingle/SmilarsSwiper.vue";
const store = useProductDetailStore();
const route = useRoute();

store.getOneProduct(route.params.id);
const product = computed(() => store.product);

const routeLink = [
  { name: "Магазин", link: "/shop" },
  { name: "Каталог", link: "/shop" },
  { name: "Компьютерные комплек..." },
];

const infomations = ref(0);
</script>
