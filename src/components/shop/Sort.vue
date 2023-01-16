<template>
  <div class="space-x-4 min-w-max">
    <div
      v-for="item in data"
      :key="item.id"
      @click="() => handleSort(item.id - 1)"
      class="inline text-primaryBlue active:text-primary hover:text-primary duration-300 cursor-pointer"
    >
      <i v-if="item.arrow == 1" class="fa-solid fa-arrow-down"></i>
      <i v-if="item.arrow == 2" class="fa-solid fa-arrow-up"> </i>
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const data = reactive([
  { id: 1, name: "Рейтинг", arrow: 0 },
  { id: 2, name: "Новинка", arrow: 1 },
  { id: 3, name: "Цена", arrow: 0 },
]);
const handleSort = (id) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id + 1) {
      data[i].arrow == 2 ? (data[i].arrow = 1) : data[i].arrow++;
    } else {
      data[i].arrow = 0;
    }
  }
};
</script>
