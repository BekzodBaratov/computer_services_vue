<template>
  <p
    v-if="!hasProduct && categoryStore.error"
    class="text-center text-2xl text-gray-500 font-semibold mt-12"
  >
    {{ categoryStore.error }}
  </p>
  <p
    v-if="!hasProduct && !categoryStore.error"
    class="text-center text-2xl text-gray-500 font-semibold mt-12 my-12"
  >
    Siz izlayotgan mahsulot yoki jihoz ma`lumotlar bazasidan topilmadi!
  </p>

  <ul v-if="hasProduct" class="cardContainer mt-6">
    <li v-for="product in categoryStore.products" :key="product.id">
      <Card :product="product" />
    </li>
  </ul>

  <!-- <div v-if="hasProduct" class="flex justify-center py-6">
    <Paginate />
  </div> -->
</template>

<script setup>
import { useCategoryProduct } from "../../store/categoryProduct";
import Paginate from "./Paginate.vue";
import Card from "../card.vue";
import { computed } from "vue";

const categoryStore = useCategoryProduct();
categoryStore.getProducts();

const hasProduct = computed(() => categoryStore.products.length);
</script>

<style scoped>
.cardContainer {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4;
}
</style>
