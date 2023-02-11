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
            <div class="absolute bottom-1 md:bottom-7 text-left mx-2 md:mx-10 text-white">
              <h2 class="text-lg leading-none md:text-xl font-medium pb-2">{{ product.name }}</h2>
              <h3 class="transition-all duration-300 overflow-hidden h-0 group-hover:h-14">
                <span class="line-clamp-2 leading-xs text-sm md:text-[1rem] font-normal">
                  {{ product.price }}
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
// import axios from "axios";
import { RouterLink } from "vue-router";
import { useServices } from "../store/services";
const store = useServices();

// async function fetchApi() {
//   try {
//     const res = await axios({
//       method: "get",
//       url: "categories",
//       headers: {},
//       withCredentials: true,
//     });
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchApi();
</script>
