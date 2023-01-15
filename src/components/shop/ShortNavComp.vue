<template>
  <div className="w-[98%] mx-auto">
    <ul className="text-primary line-clamp-2 space-x-4">
      <li
        className="border-b inline border-primary active:border-dashed cursor-pointer"
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
