<template>
  <div className="flex flex-col items-center gap-14 mt-10 ">
    <div className="flex">
      <div className="flex-3  flex flex-col gap-16 ">
        <h2 className="text-[#002E69] font-Jost font-bold text-[36px] ">{{ descr.title }}</h2>
        <div className="grid gap-4 grid-cols-2  h-4 w-full">
          <div v-for="(offer, i) in descr?.offers" :key="{ i }" className="text[#002E69] w-full flex ">
            <p className="text-2xl pr-6 font-Jost">{{ offer }}</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src="../assets/img/ServicesImages/noutbook.webp" alt="notebook" className="w-[30rem] h-[25rem] " />
      </div>
    </div>
    <div className="flex  gap-16">
      <h2 className="text-[#002E69] font-Jost font-bold text-[36px] w-[300px]">Мы поможем если у вас –</h2>
      <div className="grid gap-7 grid-cols-2 h-4 ">
        <div v-for="(list, i) in descr.desc" :key="i" className="text[#002E69] flex ">
          <p className="text-2xl w-full pr-8 font-Jost">{{ list }}</p>
        </div>
      </div>
    </div>
    <button
      className="w-[290px] h-[50px] bg-[#28A745] text-[30px] mt-4 cursor-pointer
             text-white rounded-[3px] flex items-center font-Jost justify-center border-none"
    >
      Заказать звонок
    </button>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useServices } from "../store/services";
const store = useServices();
const route = useRoute();
const id = route.params.id;
const descr = store.products[id].description;

console.log(route.params.id);
console.log(store.products[id].description);
</script>
