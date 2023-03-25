<template>
  <p class="" v-html="store.product_detail.description"></p>
</template>

<script setup>
import { useProductDetailStore } from "../../store/productDetail.js";
const store = useProductDetailStore();
</script>
