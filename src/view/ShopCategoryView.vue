<template>
  <div class="container mx-auto">
    <SearchFormCompVue />
    <ShortNavCompVue />
    <div class="flex justify-between items-center">
      <RouteLinkVue class="mt-6 mb-4" :route="arrFunc" />
      <div class="space-x-6">
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Рейтинг
        </RouterLink>
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Новинка
        </RouterLink>
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Цена
        </RouterLink>
      </div>
    </div>
    <p class="text-2xl text-[#4F87D3CC]">Компьютерные комплектующие...</p>
    <div class="grid grid-cols-3">
      <div class="hidden md:block col-span-1 filter"><CradsVue /></div>
      <div class="col-span-3 md:col-span-2 cards"><FilterVue /></div>
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
</script>
