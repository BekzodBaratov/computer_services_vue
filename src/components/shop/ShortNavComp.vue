<template>
  <div className="w-[98%] mx-auto">
    <ul className="flex items-start justify-start flex-wrap gap-4 text-primary">
      <li
        className="border-b border-primary border-dashed transition-all hover:border-solid cursor-pointer"
        v-for="(val, index) in store.shortNav"
        :key="index"
      >
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { shopStore } from "../../store/shop";
const store = shopStore();
</script>
