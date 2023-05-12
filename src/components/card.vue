<template>
  <div class="card bg-[#f9fafd] shadow-sm h-full rounded-xl overflow-hidden">
    <div class="imgCard h-[200px] overflow-hidden">
      <router-link :to="`/shop/${product.id}`" class="w-full h-full">
        <img
          class="w-full h-full object-cover"
          :src="product.image_url"
          alt="image"
        />
      </router-link>
    </div>
    <div
      class="context px-2 py-4 rounded-b-xl space-y-2 flex flex-col justify-between"
    >
      <div>
        <!--        <div class="flex justify-between items-center flex-wrap">-->
        <!--          <div class="text-primaryBlue">{{ product.avg_rating.toFixed(2) }} <i class="fas fa-star"></i></div>-->
        <!--          <div class="text-primaryBlue">{{ product.reviews?.length || 0 }} отзывов</div>-->
        <!--        </div>-->
        <router-link
          :to="`/shop/${product.id}`"
          class="hover:text-blue-500 duration-150 text-md font-bold line-clamp-1"
        >
          {{ product.name }}
        </router-link>
        <div>{{ product.product_detail?.condition }}</div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <div class="font-semibold">
          {{ numberWithSpaces(product?.product_detail?.price) }} so’m
        </div>
        <!--        <ButtonStrokeVue><span class="py-1" @click="addBasket(product)">В корзину</span> </ButtonStrokeVue>-->
        <SaveBasket @click="addBasket(product)" :isClick="isClick">
          В корзину
        </SaveBasket>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ButtonStrokeVue from "./buttons/ButtonStroke.vue";
import SaveBasket from "./buttons/SaveBasket.vue";
import numberWithSpaces from "../helpers/numberFormat";
import { useBasketStore } from "../store/basketProducts";
const store = useBasketStore();
const isClick = ref(false);

const props = defineProps(["product"]);
const product = computed(() => props.product);

function addBasket(product) {
  isClick.value = !isClick.value;
  if (isClick.value) {
    const newProduct = {
      ...product,
      count: 1,
    };
    store.products = store.products.filter((item) => item.id !== product.id);
    store.products.push(newProduct);
  } else {
    store.products = store.products.filter((item) => item.id !== product.id);
  }
}
</script>
