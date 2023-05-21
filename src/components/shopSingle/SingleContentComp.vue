<template>
  <div class="">
    <div class="grid grid-cols-5">
      <div class="col-span-2 md:col-span-3 justify-between">
        <p class="text-[#4F87D3CC] text-xl">Количество</p>
        <InputCount v-model="count" />
      </div>
      <div class="col-span-3 md:col-span-2">
        <div class="bg-whiteBlue rounded-xl px-4 py-2 w-56">
          <p class="text-2xl text-danger font-semibold text-center pb-2">
            {{ NumberFormat(product.product_detail ? product.product_detail.price : 0) }} сум
          </p>
          <div class="flex gap-1">
            <ButtonFill class="w-full">
              <router-link to="/basket">Купить</router-link>
            </ButtonFill>
            <!--            <div-->
            <!--              @click="savedFunc"-->
            <!--              class="p-2 rounded-lg border border-primary flex items-center justify-center cursor-pointer"-->
            <!--            >-->
            <!--              <div class="shopcart flex flex-col items-center">-->
            <!--                <i-->
            <!--                  class="fa-heart text-[2rem] text-primary"-->
            <!--                  :class="!isSaved ? 'fa-regular' : 'fa-solid'"-->
            <!--                ></i>-->
            <!--              </div>-->
            <!--            </div>-->
            <SaveBasket @click="saveBasket(product)" :isClick="isClick"> В корзину </SaveBasket>
          </div>
        </div>
      </div>
    </div>
    <p class="text-[#4F87D3CC] text-xl mb-3">Характеристики</p>
    <div v-for="(val, k) in JSON.parse(productSpecification)" :key="k" class="">
      <p>{{ val }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useProductDetailStore } from "../../store/productDetail";
import ButtonFill from "../buttons/ButtonFill.vue";
const store = useProductDetailStore();
import NumberFormat from "../../helpers/numberFormat.js";
import SaveBasket from "../../components/buttons/SaveBasket.vue";
import { useBasketStore } from "../../store/basketProducts.js";
import InputCount from "../../components/shop/InputCount.vue";
const basketStore = useBasketStore();

const product = computed(() => store.product);
const productSpecification = computed(() => store.productSpecification);

const count = ref(1);
const isClick = ref(false);

function saveBasket(product) {
  isClick.value = !isClick.value;
  console.log(product);
  if (isClick.value) {
    const newProduct = {
      ...product,
      count: count.value,
    };
    basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
    basketStore.products.push(newProduct);
  } else {
    basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
  }
}

const countFunc = (val) => (val ? count.value++ : count.value > 0 ? count.value-- : 1);

const isSaved = ref(false);
const savedFunc = () => {
  isSaved.value = !isSaved.value;
};
</script>
