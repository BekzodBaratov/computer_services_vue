<template>
  <div class="c-black">
    <div class="mx-auto container min-h-screen py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-3 xl:gap-x-8">
        <RouterLink v-for="product in store.products" :key="product.id" :to="`/services/${product.id}`" class="group">
          <div class="relative transition-all duration-300 cursor-pointer rounded-md overflow-hidden">
            <img :src="product.image_url" :alt="product.image" class="h-60 w-full object-cover object-center" />
            <div class="absolute inset-0 duration-200 backdrop-blur-0 sm:backdrop-blur-[1.5px] bg-[#0006] group-hover:backdrop-blur-0"></div>
            <div class="absolute bottom-0 pb-1 md:pb-3 text-left mx-2 md:mx-6 text-white">
              <h2 class="text-lg leading-none md:text-xl font-medium pb-2">{{ product.name }}</h2>
              <h3 class="transition-all duration-300 overflow-hidden h-0 group-hover:h-14">
                <span class="line-clamp-2 leading-xs text-sm md:text-[1rem] font-normal">
                  {{ product.description }}
                </span>
              </h3>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useServices } from "../store/services";
const store = useServices();

if (!store.products.length) store.getAllProducts();
</script>
