<template>
  <div class="container mx-auto">
    <!--    <pre>{{ configBasket.products }} STORE</pre>-->
    <!--      basket store-->
    <!--      <pre>{{basketStore.products}}</pre>-->
    <div
      class="header grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center pt-10"
    >
      <div class="">
        <h2 class="text-primary text-5xl font-semibold">
          {{ t("configure.title") }}
        </h2>
        <p class="text-3xl font-normal text-primary mt-8">
          {{ t("configure.desc") }}
        </p>
      </div>
      <div class="hidden md:block mx-auto">
        <img
          src="/src/assets/img/static/Group.svg"
          class="h-[36rem] float-right"
        />
      </div>
    </div>
    <!-- pastki section -->
    <div class="body grid grid-cols-1 md:grid-cols-[4fr,1fr] mt-11 gap-6 mb-20">
      <div class="block md:hidden mx-auto bg-[#4f87d30d] py-12 w-full">
        <div class="flex flex-row md:flex-col">
          <div class="mx-auto">
            <img class="w-40" src="../assets/img/static/comp.svg" />
          </div>
          <div class="mx-auto mt-12">
            <div class="bg-whiteBlue rounded-xl px-4 py-2 w-56">
              <p class="text-2xl text-danger font-semibold text-center pb-2">
                {{ FormatNumber(configBasket?.allSum || 0) }} UZS
              </p>
              <div class="flex gap-1">
                <save-basket @click="costProduct">Купить</save-basket>
                <SaveBasket @click="addBasket" :isClick="isClick"
                  >В корзину</SaveBasket
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="grid divide-y-reverse grid-cols-1 md:grid-cols-[2fr,4fr] md:divide-x md:divide-slate-300"
      >
        <div
          class="hidden md:block px-5 py-2 md:max-h-[100vh] overflow-y-scroll bg-[#4f87d30d]"
        >
          <div
            class="mt-2 text-base"
            v-for="(configutarion, index) in store.data"
            :key="index"
            :id="`#${configutarion.type}`"
          >
            <p
              class="font-medium leading-[2rem] text-[20px] mt-2 text-[#002e6980] cursor-pointer transition-all duration-300 hover:text-primary"
            >
              {{ configutarion?.type }}
            </p>
          </div>
        </div>

        <div
          class="pl-8 pr-12 md:max-h-[100vh] overflow-y-scroll py-14 bg-[#4f87d30d]"
        >
          <div
            class="grid grid-cols-2 gap-4 items-center mb-8"
            v-for="configration in store.data"
            :key="configration.id"
          >
            <p class="text-primary text-[20px] leading-[3rem] font-medium">
              {{ configration?.type }}
            </p>
            <ConfigrationCard
              :data="configration.products"
              :inputName="configration?.type"
              class="mt-3"
            />
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
              <p class="text-2xl text-danger font-semibold text-center pb-2">
                {{ FormatNumber(configBasket?.allSum || 0) }} UZS
              </p>
              <div class="flex gap-1">
                <save-basket @click="costProduct">Купить</save-basket>
                <SaveBasket @click="addBasket" :isClick="isClick"
                  >В корзину</SaveBasket
                >
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
import { useConfigBasketStore } from "../store/configBasket.js";
import { useBasketStore } from "../store/basketProducts.js";
import ConfigrationCard from "../components/card/ConfigrationCard.vue";
import FormatNumber from "../helpers/numberFormat.js";
import SaveBasket from "../components/buttons/SaveBasket.vue";
import { useRouter } from "vue-router";

const { t } = useI18n();
const isSaved = ref(false);
const savedFunc = () => (isSaved.value = !isSaved.value);

const store = useConfigration();
const configBasket = useConfigBasketStore();
const basketStore = useBasketStore();

const router = useRouter();

const isClick = ref(false);
function addBasket() {
  isClick.value = !isClick.value;
  if (isClick.value) {
    // basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
    basketStore.products = [...basketStore.products, ...configBasket.products];
    configBasket.products = [];
    localStorage.removeItem("configBasketProduct");
  } else {
    // basketStore.products = basketStore.products.filter((item) => item.id !== product.id);
  }
}

function costProduct() {
  basketStore.products = [...basketStore.products, ...configBasket.products];
  localStorage.removeItem("configBasketProduct");
  router.push("/basket");
}
onMounted(() => store.fetchData());
</script>
