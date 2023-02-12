<template>
  <div class="container mx-auto">
    <SearchFormCompVue />
    <RouteLinkVue :route="arrFunc" />
    <ShortNavCompVue />
    <div class="flex items-center justify-between gap-1 pb-2 pt-8 space-x-2">
      <p class="text-xl font-semibold text-[#4F87D3CC] line-clamp-1">All Products</p>
      <SortVue />
    </div>
    <div
      @click="openFilter = !openFilter"
      class="md:hidden text-xl font-semibold text-[#4f87d3cc] pb-4 cursor-pointer inline-block space-x-2 hover:text-[#3c6aabcc]"
    >
      <i class="fa-solid fa-filter"></i>
      <span class="capitalize">филтер</span>
    </div>
    <div class="grid grid-cols-9">
      <div v-if="openFilter" class="col-span-9 md:col-span-2 filter"><FilterVue /></div>
      <div class="col-span-9 md:col-span-7 cards"><CardVue /></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import RouteLinkVue from "../components/RouteLink.vue";
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ShortNavCompVue from "../components/shop/ShortNavComp.vue";
import FilterVue from "../components/shopCategory/CategoryFilter.vue";
import CardVue from "../components/shopCategory/CategoryCard.vue";
import SortVue from "../components/shop/Sort.vue";

const arrFunc = reactive([
  { name: "Магазин", link: "/shop" },
  { name: "Каталог", link: "/shop/category" },
  { name: "all" },
]);
const openFilter = ref(true);
</script>
