<template>
  <SearchFormCompVue />
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <h3 class="text-3xl my-3 font-medium text-primary">Избранные</h3>
      <div class="space-x-6 text-end">
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Рейтинг
        </RouterLink>
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Новинка
        </RouterLink>
        <RouterLink class="text-primaryBlue active:text-primary hover:text-primary duration-300" to="#">
          <i class="fa-solid fa-arrow-up"> </i>
          <i class="fa-solid fa-arrow-down"></i>
          Цена
        </RouterLink>
      </div>
    </div>

    <div class="cards mb-6 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
      <div v-for="(val, key) in store.cardSwiper[0][1]" :key="key" class="bg-white h-full rounded-3xl">
        <RouterLink :to="'/shop/' + key">
          <div class="imgCard p-2">
            <img class="w-full" src="/src/assets/img/magazin/card/Rectangle64.png" :alt="val.name" />
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
              <ButtonStrokeVue to=""><span class="py-1">В корзину</span></ButtonStrokeVue>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ButtonStrokeVue from "../components/buttons/ButtonStroke.vue";
import LoadingModalVue from "../components/modals/LoadingModal.vue";

import { shopStore } from "../store/shop";
const store = shopStore();
</script>
