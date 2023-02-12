<template>
  <p v-if="!categoryStore.products.length" class="text-center text-2xl text-gray-500 font-semibold mt-12">
    {{ categoryStore.error }}
  </p>
  <div
    v-if="categoryStore.products.length"
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4"
  >
    <div
      v-for="val in categoryStore?.products"
      :key="val?.id"
      class="card bg-[#f9fafd] shadow-sm h-full rounded-xl overflow-hidden"
    >
      <div>
        <div class="imgCard max-h-60 overflow-hidden">
          <img class="w-full object-cover object-center" :src="val?.image_url" alt="image" />
        </div>
        <div class="context px-2 py-4 h-full rounded-b-xl space-y-2">
          <div class="flex justify-between items-center flex-wrap">
            <div class="text-primaryBlue">{{ 4.69 }} <i class="fas fa-star"></i></div>
            <div class="text-primaryBlue">{{ 34 }} отзывов</div>
          </div>
          <RouterLink
            :to="'/shop/' + val.product_detail?.productId"
            class="hover:text-blue-500 duration-150 text-lg font-semibold"
          >
            {{ val.name }}
          </RouterLink>
          <div>{{ val.product_detail?.condition }}</div>
          <div class="flex justify-between items-center flex-wrap">
            <div class="font-semibold">{{ numberWithSpaces(val?.product_detail?.price) }} sum</div>
            <ButtonStrokeVue><span class="py-1">В корзину</span> </ButtonStrokeVue>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="categoryStore.products.length" class="flex justify-center py-6">
    <Paginate />
  </div>
  <LoadingModal v-if="categoryStore.loading" />
</template>

<script setup>
import { useCategoryProduct } from "../../store/categoryProduct";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";
import numberWithSpaces from "../../helpers/numberFormat";
import LoadingModal from "../modals/LoadingModal.vue";
import Paginate from "./Paginate.vue";

const categoryStore = useCategoryProduct();
if (categoryStore.products.length) {
  console.log(categoryStore.products);
}
categoryStore.getProducts();
</script>
