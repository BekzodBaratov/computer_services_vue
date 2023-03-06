<template>
  <div v-for="data in categories" v-if="categories" :key="data.id">
    <RouterLink :to="`/shop/category/?search=${data.name}`" class="category-title group">
      {{ data.name }}
      <i class="fa-sharp fa-solid fa-arrow-right-long category-icon"></i>
    </RouterLink>
    <Swiper :products="data.products" />
  </div>
</template>

<script setup>
import { useMainProducts } from "../../store/mainProducts";
import { computed } from "vue";
import Swiper from "../swiper.vue";
const store = useMainProducts();

if (!store.categories.length) store.getAllProductsByCategory();
const categories = computed(() => store.categories);
</script>

<style>
.category-title {
  @apply inline text-2xl lg:text-3xl text-primaryBlue font-semibold pl-4 pb-4 line-clamp-1;
}
.category-icon {
  @apply pl-3 translate-y-[2px] group-hover:translate-x-3 duration-200;
}
</style>
