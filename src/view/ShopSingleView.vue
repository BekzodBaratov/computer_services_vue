<template>
  <div>
    <SearchFormComp />
    <div class="container mx-auto">
      <RouteLink class="mb-3 text-base" :route="routeLink" />
      <h2 class="text-3xl mb-2 font-bold text-primaryBlue">
        {{ product.name }}
      </h2>
      <!--    <div class="flex items-center">-->
      <!--      <svg-->
      <!--        aria-hidden="true"-->
      <!--        class="w-6 h-6 text-primaryBlue"-->
      <!--        fill="currentColor"-->
      <!--        viewBox="0 0 20 20"-->
      <!--        xmlns="http://www.w3.org/2000/svg"-->
      <!--      >-->
      <!--        <title>Rating star</title>-->
      <!--        <path-->
      <!--          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"-->
      <!--        ></path>-->
      <!--      </svg>-->
      <!--      <p class="ml-2 font-bold text-primaryBlue">{{ product.avg_rating.toFixed(2) }}</p>-->
      <!--      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>-->
      <!--      <a href="#" class="font-medium text-primaryBlue underline hover:no-underline">-->
      <!--        {{ product.reviews ? product.reviews.length : 0 }} отзывов-->
      <!--      </a>-->
      <!--    </div>-->
      <div class="singleComp grid grid-cols-12 gap-8 my-8">
        <div class="swiperImg col-span-12 md:col-span-5">
          <img class="rounded-xl w-full h-auto" :src="store.images[0]" alt="product image" />
        </div>
        <div class="content col-span-12 md:col-span-7">
          <SingleContentComp />
        </div>
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
          <!-- <button
          @click="infomations = 1"
          class="font-bold border-b py-1"
          :class="infomations === 1 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
        >
          Обзоры
        </button> -->
          <!-- <button
            @click="infomations = 2"
            class="font-bold border-b py-1"
            :class="infomations === 2 ? 'text-primary border-primary' : 'text-[#4F87D3CC] border-[#4F87D3CC]'"
          >
            Отзывы
          </button> -->
        </div>
        <div>
          <div v-if="infomations === 0">
            <p class="text-primary mb-6">
              {{ product.product_detail?.description }}
            </p>
          </div>
          <div>
            <UserCommit v-if="infomations === 2" />
          </div>
        </div>
      </div>
      <div class="my-10">
        <h3 class="text-3xl text-primary pb-4">Похожие товары</h3>
        <SmilarsCompVue />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductDetailStore } from "../store/productDetail";

import RouteLink from "../components/RouteLink.vue";
import SearchFormComp from "../components/shop/SearchFormComp.vue";
import SingleContentComp from "../components/shopSingle/SingleContentComp.vue";
import UserCommit from "../components/shopSingle/UserCommit.vue";
import SmilarsCompVue from "../components/shopSingle/SmilarsSwiper.vue";

const store = useProductDetailStore();
const route = useRoute();
const id = route.params.id;

watch(
  () => route.params.id,
  (newId) => {
    console.log(newId, "id");
    if (store.product.id != id) store.getOneProduct(id);
  }
);

if (store.product.id != id) store.getOneProduct(id);

const routeLink = ref([{ name: "Магазин", link: "/shop" }, { name: "Каталог", link: "/categories" }, { name: "" }]);

const product = computed(() => {
  if (store.product.name) routeLink.value[2] = { name: store.product.name };
  return store.product;
});

const infomations = ref(0);
</script>
