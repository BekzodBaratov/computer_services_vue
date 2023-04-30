<template>
  <div className="container mx-auto">
    <div
      className="text-primary scroll flex flex-nowrap w-full space-x-4 overflow-x-scroll"
    >
      <p
        className=" cursor-pointer flex-shrink-0"
        v-for="(val, i) in store.categories"
        :key="i"
      >
        <RouterLink
          @click="() => categoryHandle(val.name)"
          :to="'/shop/category/?search=' + val.name"
        >
          <span
            class="bg-blue-100 text-primary text-sm font-medium px-2.5 py-0.5 rounded"
            >{{ val.name }}</span
          >
        </RouterLink>
      </p>
    </div>
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

<style scoped>
.scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
