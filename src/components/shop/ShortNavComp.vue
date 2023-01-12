<template>
  <div className="w-[98%] mx-auto">
    <ul className="flex items-start justify-start flex-wrap gap-4 text-primary">
      <li
        className="border-b border-primary border-dashed transition-all hover:border-solid active:border-solid cursor-pointer"
        v-for="(val, index) in store.shortNav"
        @click="() => handleClick(val)"
        :key="index"
      >
        <RouterLink to="shop/category">
          {{ val }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { shopStore } from "../../store/shop";
import { useRouter } from "vue-router";
const store = shopStore();
const router = useRouter();

function handleClick(val) {
  store.search = val;
  router.push("/shop/category");
}
</script>
