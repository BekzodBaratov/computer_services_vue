<template>
  <div class="container mx-auto">
    <SearchFormCompVue />
    <ShortNavCompVue />
    <div class="flex justify-between items-center">
      <RouteLinkVue class="mt-6 mb-4" :route="arrFunc" />
      <div class="space-x-6">
        <RouterLink
          @click="filterTag === 'rating_down' ? (filterTag = 'rating_up') : (filterTag = 'rating_down')"
          class="text-primaryBlue active:text-primary hover:text-primary duration-300"
          to="#"
        >
          <i v-if="filterTag === 'rating_up'" class="fa-solid fa-arrow-up"> </i>
          <i v-if="filterTag === 'rating_down'" class="fa-solid fa-arrow-down"></i>
          Рейтинг
        </RouterLink>

        <RouterLink
          @click="filterTag === 'new_down' ? (filterTag = 'new_up') : (filterTag = 'new_down')"
          class="text-primaryBlue active:text-primary hover:text-primary duration-300"
          to="#"
        >
          <i v-if="filterTag === 'new_up'" class="fa-solid fa-arrow-up"> </i>
          <i v-if="filterTag === 'new_down'" class="fa-solid fa-arrow-down"></i>
          Новинка
        </RouterLink>

        <RouterLink
          @click="filterTag === 'price_down' ? (filterTag = 'price_up') : (filterTag = 'price_down')"
          class="text-primaryBlue active:text-primary hover:text-primary duration-300"
          to="#"
        >
          <i v-if="filterTag === 'price_up'" class="fa-solid fa-arrow-up"> </i>
          <i v-if="filterTag === 'price_down'" class="fa-solid fa-arrow-down"></i>
          Цена
        </RouterLink>
      </div>
    </div>
    <p class="text-2xl text-[#4F87D3CC]">Компьютерные комплектующие...</p>
    <div class="grid grid-cols-7">
      <div class="hidden md:block col-span-2 filter"><CradsVue /></div>
      <div class="col-span-7 md:col-span-5 cards"><FilterVue :filterTag="filterTag" /></div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import RouteLinkVue from "../components/RouteLink.vue";
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ShortNavCompVue from "../components/shop/ShortNavComp.vue";
import CradsVue from "../components/shopCategory/CategoryCards.vue";
import FilterVue from "../components/shopCategory/CategoryFilter.vue";

const arrFunc = reactive([
  { name: "Магазин", link: "/shop" },
  { name: "Каталог", link: "/shop/category" },
  { name: "Компьютерные комплек..." },
]);
const filterTag = ref("new_down");
</script>
