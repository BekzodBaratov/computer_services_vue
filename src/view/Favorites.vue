<template>
  <SearchFormCompVue />
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <h3 class="text-3xl my-3 font-medium text-primary">Избранные</h3>
      <SortVue />
    </div>

    <div
      v-if="store.products.length"
      class="cards mb-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6"
    >
      <card v-for="(val, key) in store.products" :key="key" :product="val" />
    </div>
    <div v-else>
      <p class="py-32 text-center text-5xl text-primary font-semibold">Favourites not found!</p>
    </div>
  </div>
</template>

<script setup>
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import { useFavoriteStore } from "../store/favoriteProduct";
import SortVue from "../components/shop/Sort.vue";
import card from "../components/card.vue";
const store = useFavoriteStore();

store.getAllProducts();
</script>
