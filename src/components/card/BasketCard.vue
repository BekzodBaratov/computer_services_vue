<template>
  <div
    class="card bg-white rounded-xl grid grid-cols-2 max-h-48 overflow-hidden"
  >
    <div class="img h-full">
      <router-link :to="`/shop/${item?.id}`">
        <img
          class="object-cover h-full w-full object-center"
          :src="item?.image_url"
          alt="cardImg"
        />
      </router-link>
    </div>
    <div class="img rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-3 relative">
      <div
        class="delete absolute top-2 right-3 cursor-pointer"
        @click="deleteProduct(item.id)"
      >
        <i class="fa-solid fa-xmark text-lg hover:text-[red]"></i>
      </div>
      <!--            <div class="flex justify-between">-->
      <!--                                <div class="flex items-center">-->
      <!--                                  <svg-->
      <!--                                    aria-hidden="true"-->
      <!--                                    class="w-5 h-5 text-primaryBlue"-->
      <!--                                    fill="currentColor"-->
      <!--                                    viewBox="0 0 20 20"-->
      <!--                                    xmlns="http://www.w3.org/2000/svg"-->
      <!--                                  >-->
      <!--                                    <title>Rating star</title>-->
      <!--                                    <path-->
      <!--                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"-->
      <!--                                    ></path>-->
      <!--                                  </svg>-->
      <!--                                  <p class="ml-2 text-primaryBlue">{{ item?.avg_rating }}</p>-->
      <!--                                  <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>-->
      <!--                                  <p class="text-primaryBlue">{{ item?.views }}</p>-->
      <!--                                  <p class="text-primaryBlue pl-1">views</p>-->
      <!--                                </div>-->
      <!--            </div>-->
      <router-link
        :to="`/shop/${item?.id}`"
        class="transition duration-100 hover:text-primaryBlue line-clamp-2"
      >
        {{ item?.name }}
      </router-link>
      <router-link :to="`/shop/${item?.id}`" class="text-primaryBlue"
        >В наличии</router-link
      >
      <div class="flex justify-between items-center flex-wrap">
        <p class="font-semibold">
          {{ numberWithSpaces(item?.product_detail?.price) }} сум
        </p>
        <InputCount v-model="item.count" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import numberWithSpaces from "../../helpers/numberFormat.js";
import InputCount from "../shop/InputCount.vue";

import { useBasketStore } from "../../store/basketProducts.js";

const store = useBasketStore();

interface Props {
  item: {
    id: number;
    image_url: string;
    product_detail: {
      price: number;
    };
    name: string;
    count: number;
  };
}

defineProps<Props>();

function deleteProduct(id) {
  store.products = store.products.filter((item) => item.id !== id);
}
</script>
