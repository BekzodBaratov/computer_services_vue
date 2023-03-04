<template>
  <div class="card bg-[#f9fafd] shadow-sm h-full rounded-xl overflow-hidden">
    <div class="imgCard max-h-60 overflow-hidden">
      <img class="w-full object-cover object-center" :src="product.image_url" alt="image" />
    </div>
    <div class="context px-2 py-4 rounded-b-xl space-y-2 flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center flex-wrap">
          <div class="text-primaryBlue">{{ 4.69 }} <i class="fas fa-star"></i></div>
          <div class="text-primaryBlue">{{ 34 }} отзывов</div>
        </div>
        <RouterLink :to="'/shop/' + product.id" class="hover:text-blue-500 duration-150 text-md font-bold line-clamp-1">
          {{ product.name }}
        </RouterLink>
        <div>{{ product.product_detail.condition }}</div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <div class="font-semibold">{{ numberWithSpaces(product?.product_detail?.price) }} so’m</div>
        <ButtonStrokeVue><span class="py-1">В корзину</span> </ButtonStrokeVue>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ButtonStrokeVue from "./buttons/ButtonStroke.vue";
import numberWithSpaces from "../helpers/numberFormat";

const props = defineProps(["product"]);
const product = computed(() => props.product);
</script>
