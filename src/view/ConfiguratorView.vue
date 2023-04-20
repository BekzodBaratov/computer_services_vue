<template>
  <div class="container mx-auto">
    <pre>{{ store }} STORE</pre>
    <div class="header grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center pt-10">
      <div class="">
        <h2 class="text-primary text-5xl font-semibold">{{ t("configure.title") }}</h2>
        <p class="text-3xl font-normal text-primary mt-8">{{ t("configure.desc") }}</p>
      </div>
      <div class="hidden md:block mx-auto">
        <img src="/src/assets/img/static/Group.svg" class="h-[36rem] float-right" />
      </div>
    </div>
    <!-- pastki section -->
    <div class="body grid grid-cols-1 md:grid-cols-[4fr,1fr] mt-11 gap-6 mb-20">
      <div class="block md:hidden mx-auto bg-[#4f87d30d] py-12 w-full">
        <div class="flex flex-row md:flex-col">
          <div class="mx-auto">
            <img class="w-40" src="/src/assets/img/static/comp.svg" />
          </div>
          <div class="mx-auto mt-12">
            <div class="bg-whiteBlue rounded-xl px-4 py-2 w-56">
              <p class="text-2xl text-danger font-semibold text-center pb-2">790 000 сум</p>
              <div class="flex gap-1">
                <ButtonFill>{{ t("configure.btnPay") }}</ButtonFill>
                <div
                  @click="savedFunc"
                  class="p-2 rounded-lg border border-primary flex items-center justify-center cursor-pointer"
                >
                  <div class="shopcart flex flex-col items-center">
                    <i class="fa-heart text-[2rem] text-primary" :class="!isSaved ? 'fa-regular' : 'fa-solid'"></i>
                  </div>
                </div>
                <span class="p-2 rounded-lg border border-primary flex items-center justify-center cursor-pointer">
                  <img src="../assets/img/magazin/shopping-cart.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid divide-y-reverse grid-cols-1 md:grid-cols-[2fr,4fr] md:divide-x md:divide-slate-300">
        <div class="hidden md:block px-5 py-2 md:max-h-[100vh] overflow-y-scroll bg-[#4f87d30d]">
          <div
            class="mt-2 text-base"
            v-for="(configutarion, index) in store.data"
            :key="index"
            :id="`#${configutarion.type}`"
          >
            <p
              class="font-medium leading-[2rem] text-[#002e6980] cursor-pointer transition-all duration-300 hover:text-primary"
            >
              {{ configutarion.type }}
            </p>
          </div>
        </div>

        <div class="pl-8 pr-12 md:max-h-[100vh] overflow-y-scroll py-14 bg-[#4f87d30d]">
          <!-- select option 1 -->
          <div
            class="flex justify-between gap-4 items-center mb-8"
            v-for="configration in store.data"
            :key="configration.id"
          >
            <p class="text-primary text-base leading-[3rem] font-medium">{{ configration.type }}</p>
            <div class="size w-32">
              <select
                id="countries"
                v-model="selected"
                @change="() => selectFunc(configration.id, selected)"
                class="bg-transparent border border-primary text-[#002e694d] leading-[3rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 outline-none"
              >
                <option value="0" selected>None</option>
                <option
                  v-for="product in configration.products"
                  :key="product.id"
                  :value="product.product_detail.price"
                >
                  {{ product.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- left result -->
      <div class="hidden md:block mx-auto bg-[#4f87d30d] py-12 w-full">
        <div class="flex flex-row md:flex-col">
          <div class="mx-auto">
            <img class="w-40" src="/src/assets/img/static/comp.svg" />
          </div>
          <div class="mx-auto mt-12">
            <div class="bg-whiteBlue rounded-xl px-4 py-2 w-56">
              <p class="text-2xl text-danger font-semibold text-center pb-2">790 000 сум</p>
              <div class="flex gap-1">
                <ButtonFill>Купить</ButtonFill>
                <div
                  @click="savedFunc"
                  class="p-2 rounded-lg border border-primary flex items-center justify-center cursor-pointer"
                >
                  <div class="shopcart flex flex-col items-center">
                    <i class="fa-heart text-[2rem] text-primary" :class="!isSaved ? 'fa-regular' : 'fa-solid'"></i>
                  </div>
                </div>
                <span class="p-2 rounded-lg border border-primary flex items-center justify-center cursor-pointer">
                  <img src="../assets/img/magazin/shopping-cart.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ButtonFill from "../components/buttons/ButtonFill.vue";
import { useI18n } from "vue-i18n";
import { useConfigration } from "../store/configration.js";

const { t } = useI18n();
const isSaved = ref(false);
const savedFunc = () => (isSaved.value = !isSaved.value);

const selected = ref(0);

const store = useConfigration();
onMounted(() => store.fetchData());

const selectFunc = (i) => {
  console.log(i);
  console.log(selected.value);
};
</script>

<style scoped>
input[type="radio"] {
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
}
</style>
