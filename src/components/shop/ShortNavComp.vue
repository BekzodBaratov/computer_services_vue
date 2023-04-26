<template>
  <div className="container mx-auto">
    <ul className="text-primary line-clamp-1 md:line-clamp-1 space-x-4">
      <li className="inline cursor-pointer" v-for="(val, i) in store.categories" :key="i">
        <RouterLink @click="() => categoryHandle(val.name)" :to="'/shop/category/?search=' + val.name">
          <span class="bg-blue-100 text-primary text-sm font-medium px-2.5 py-0.5 rounded">{{ val.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMainProducts } from "../../store/mainProducts";
import { useCategoryProduct } from "../../store/categoryProduct";
import { useRoute } from "vue-router";
const store = useMainProducts();
const categoryStore = useCategoryProduct();
const route = useRoute();

const categoryHandle = (search) => {
  categoryStore.getProducts(search);
};
</script>
