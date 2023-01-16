<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4">
    <div v-for="(val, key) in store.cardSwiper[0][1]" :key="key" class="bg-white h-full rounded-3xl">
      <RouterLink :to="'/shop/' + key">
        <div class="imgCard p-2">
          <img class="w-full" src="../../assets/img/magazin/card/Rectangle64.png" :alt="val.name" />
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
        <li v-for="(page, index) in pagination" :key="index">
          <a
            href="#"
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >{{ page }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { shopStore } from "../../store/shop";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";
const store = shopStore();
const pagination = reactive([
  { id: 0, text: "Previous" },
  { id: 1, current: true, text: "1" },
  { id: 2, text: "2" },
  { id: 3, text: "" },
  { id: 4, text: "2" },
  { id: 5, text: "2Next" },
]);
</script>

<!-- client id -->
<!-- 736839198215-famfbf5fibh3a2fnut8544gnvh85vpvb.apps.googleusercontent.com -->
<!-- client secret -->
<!-- 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 -->
