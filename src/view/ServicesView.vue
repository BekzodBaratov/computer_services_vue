<template>
  <div class="c-black">
    <div class="mx-auto container min-h-screen py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 xl:gap-x-8">
        <RouterLink v-for="product in store.products" :key="product.id" :to="'/services/' + product.id" class="group">
          <div
            class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale group-hover:grayscale-0"
          >
          
            <img
              src="../assets/img/ServicesImages/img.png"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center"
            />
            <div class="absolute bottom-7 text-left mx-10 text-white">
              <h2 class="text-xl font-medium">{{ product.name }}</h2>
              <h3 class="transition-all duration-300 overflow-hidden h-0 group-hover:h-20">
                {{ product.price }}
              </h3>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useServices } from "../store/services";
const store = useServices();
</script>
