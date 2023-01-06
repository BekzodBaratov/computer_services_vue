<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="(val, key) in store.cardSwiper[0][1]" :key="key" class="bg-white h-full rounded-3xl">
      <RouterLink :to="'/shop/' + key">
        <div class="imgCard p-2">
          <img class="w-full" src="../../assets/img/magazin/card/Rectangle 64.png" :alt="val.name" />
        </div>
        <div class="context px-2 py-4 bg-[#e7f0fe99] rounded-3xl space-y-2">
          <div class="flex justify-between items-center flex-wrap">
            <div class="text-primaryBlue">{{ val.rating }}</div>
            <div class="text-primaryBlue">{{ val.review }} отзывов</div>
          </div>
          <div>{{ val.name }}</div>
          <div>{{ val.typeOfMoney }}</div>
          <div class="flex justify-between items-center flex-wrap">
            <div class="font-semibold">{{ val.cost }} {{ val.currency }}</div>
            <ButtonStrokeVue><span class="py-1">В корзину</span> </ButtonStrokeVue>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>

  <div class="paginationBar text-center mt-4 mb-8 md:mb-16">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px">
        <li>
          <a
            href="#"
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            >Previous</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            >3</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >4</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >5</a
          >
        </li>
        <li>
          <a
            href="#"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { shopStore } from "../../store/shop";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";
const store = shopStore();

const props = defineProps({ filterTag: { required: true, type: String } });
</script>
