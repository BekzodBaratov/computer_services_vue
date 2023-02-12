<template>
  <Paginate
    :v-model="store.limit"
    :page-count="store.pageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="handlePageClick"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'paginationUl'"
  >
  </Paginate>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
import { useCategoryProduct } from "../../store/categoryProduct";
const store = useCategoryProduct();

function handlePageClick(pageNumber) {
  console.log(pageNumber);
  // store.setSkip(pageNumber - 1);
  // store.getProducts();
}
</script>

<style>
.paginationUl {
  @apply flex border border-gray-300 text-xl bg-gray-100 divide-x cursor-pointer rounded-sm overflow-hidden;
}
.page-item {
  @apply px-2 text-center hover:bg-gray-200 duration-100;
}
.page-item.active {
  @apply bg-gray-200;
}
.page-item.disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
