<template>
  <div className="md:w-3/4 w-4/5 mx-auto my-10 space-y-44 md:space-y-32 lg:space-y-24 xl:space-y-12 min-h-screen">
    <div className="flex justify-between  flex-col-reverse lg:flex-row gap-6">
      <div className="flex-3  flex flex-col gap-6 md:gap-16">
        <h2 className="text-primary  font-bold text-5xl ">{{ descr.title }}</h2>
        <div className="grid gap-4 grid-cols-2  h-4 w-full">
          <div v-for="(offer, i) in descr?.offers" :key="{ i }" className="textprimary w-full flex ">
            <p className="text-2xl pr-6 ">{{ offer }}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 self-center justify-self-end">
        <img src="../assets/img/ServicesImages/noutbook.webp" alt="notebook" className="h-[25rem] float-right" />
      </div>
    </div>

    <div className="flex flex-col  gap-16">
      <h2 className="text-primary font-bold text-5xl w-[20rem]">Мы поможем если у вас –</h2>
      <div className="grid gap-7 grid-cols-2 h-4">
        <div v-for="(list, i) in descr.desc" :key="i" className="textprimary flex ">
          <p className="text-2xl w-full pr-8">{{ list }}</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center pt-20 md:pt-40">
      <ButtonFillVue color="#28A745">
        <a class="py-2 px-4 text-2xl" href="tel:944455537">Заказать звонок</a>
      </ButtonFillVue>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useServices } from "../store/services";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";

const store = useServices();
const route = useRoute();
const id = route.params.id;
const descr = store.products[id].description;

console.log(route.params.id);
console.log(store.products[id].description);
</script>
