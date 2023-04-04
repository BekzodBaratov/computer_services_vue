<template>
  <div class="container mx-auto grid md:grid-cols-2 gap-12 my-12 items-center">
    <div class="left font-semibold">
      <h3 class="text-5xl pb-2 font-semibold text-gray-800">{{ t("about.title") }}</h3>
      <p class="pr-24 text-xl text-gray-500">{{ t("about.desc") }}</p>
    </div>
    <div class="right grid grid-cols-2 gap-3 h-[24rem] md:mx-16">
      <div class="bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service1.jpg" alt="img" />
      </div>
      <div class="bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service2.jpg" alt="img" />
      </div>
      <div class="col-span-2 bg-gray-300">
        <img class="object-cover object-center w-full h-full" src="../assets/img/about/service3.jpg" alt="img" />
      </div>
    </div>
  </div>
  <div class="container mx-auto text-center bg-slate-300 rounded-md ring ring-offset-4 ring-slate-300 my-16 py-16">
    <h2 class="text-5xl text-gray-800 font-semibold mb-3">{{ t("about.leaders") }}</h2>
    <p class="pb-4 md:pb-16 text-gray-500">{{ t("about.leadersDesc") }}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 items-center my-12 px-16 md:px-52">
      <div v-for="i in 4" :key="i" class="cardLeads flex flex-col">
        <div class="overflow-hidden rounded-full flex justify-center mb-2 group">
          <img
            class="w-52 aspect-square rounded-full object-cover object-center duration-200 group-hover:scale-110"
            src="https://imageio.forbes.com/specials-images/imageserve/60676384c5f722607f2ae0df/0x0.jpg?format=jpg&crop=1078,1078,x0,y2,safe&height=416&width=416&fit=bounds"
            alt="img"
          />
        </div>
        <div class="title text-xl font-semibold">Justin Baber</div>
        <div>Team lead</div>
        <div></div>
      </div>
    </div>
    <div class="flex justify-center my-3">
      <ButtonFill>
        <span class="py-2 px-3">{{ t("about.leadersBtn") }}</span>
      </ButtonFill>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import ButtonFill from "../components/buttons/ButtonFill.vue";
const { t } = useI18n();
</script>
