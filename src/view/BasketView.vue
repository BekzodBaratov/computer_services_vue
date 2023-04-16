<template>
  <div class="min-h-screen">
    <SearchFormCompVue />
    <div class="container mx-auto">
      <h1 class="text-3xl text-primary my-4">Оформление заказа</h1>
      <div class="flex flex-col-reverse md:flex-row justify-between">
        <div class="space-y-3 mb-6">
          <div class="fio space-y-1">
            <label for="fio" class="block text-primaryBlue">ФИО</label>
            <input
              type="text"
              v-model="state.username"
              placeholder="Bekzod Baratov"
              class="w-56 p-1 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-primaryBlue text-primary outline-none"
            />
            <br />
            <span class="text-sm text-end text-red-600" v-if="v$.username.$error">{{
              v$.username.$errors[0].$message
            }}</span>
          </div>
          <div class="tel">
            <label for="tel" class="block text-primaryBlue">ФИО</label>
            <input
              type="text"
              v-model="state.phone"
              placeholder="+998 90 123 45 67"
              class="w-56 p-1 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-primaryBlue text-primary outline-none"
            />
            <br />
            <span class="text-sm text-end text-red-600" v-if="v$.phone.$error">{{ v$.phone.$errors[0].$message }}</span>
          </div>
          <div @click="formLoginData" class="flex flex-col items-start gap-3 pt-3">
            <ButtonFillVue>
              <span class="py-2">Оставить заявку на оплату</span>
            </ButtonFillVue>
          </div>
        </div>

        <div class="mb-6">
          <div class="bg-[#4F87D30D] ml-0 md:ml-20 rounded pt-6">
            <div class="cards px-6 flex flex-col gap-3 max-h-[30rem] overflow-auto">
              <div
                class="card bg-white rounded-xl overflow-hidden grid grid-cols-[1fr_2fr] max-h-40 md:max-h-52 text-sm shadow-[0_0_5px_rgba(0,0,0,0.3)]"
                v-for="(item, index) in basketStore.products"
                :key="index"
              >
                <img class="object-cover object-bottom w-40 h-40" :src="item?.image_url" alt="cardImg" />
                <div class="rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-primaryBlue"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p class="ml-2 text-primaryBlue">
                        {{ item?.avg_rating }}
                      </p>
                      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
                      <p class="text-primaryBlue underline">{{ item?.views }} отзывов</p>
                    </div>
                  </div>
                  <h3 class="">
                    {{ item?.name }}
                  </h3>
                  <div class="text-primaryBlue">В наличии</div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold">{{ numberWithSpaces(item?.product_detail?.price) }} сум</p>
                    <InputCount v-model="item.count" />
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="basketStore.productCount > 0"
              class="menu w-full text-primaryBlue rounded-t-xl px-8 py-8 space-y-6 shadow-lg"
            >
              <div class="flex justify-between items-center font-bold">
                <p>Итого</p>
                <p>{{ numberWithSpaces(basketStore.allSum) }} сум</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Teleport v-if="false" to="body">
    <div v-if="isOpenModal" @click="isOpenModal = false" class="fixed z-[99999] inset-0 bg-[#0006] backdrop-blur"></div>
    <div
      v-if="isOpenModal"
      class="PayModal fixed z-[999999] w-[40rem] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-md px-6 py-8 space-y-10 shadow-lg"
    >
      <div class="flex justify-between gap-2 h-12">
        <p class="text-2xl text-primary self-end">Выбор способа оплаты</p>
        <span @click="isOpenModal = false" class="p-2">
          <i class="fa-solid fa-xmark text-xl text-primary"></i>
        </span>
      </div>
      <form action="pay">
        <ul class="space-y-4 text-lg pb-8">
          <li class="space-x-4 flex items-center">
            <input type="radio" name="pay" id="card" />
            <label for="card">
              <div class="flex items-center gap-2">
                <p>Онлайн оплата с помощью Humocard / UzCard</p>
                <img class="w-7 h-7" src="/src/assets/img/magazin/modal/toshkent.png" alt="humo" />
                <img class="w-7 h-7" src="/src/assets/img/magazin/modal/Frame323.png" alt="uzcard" />
              </div>
              <p class="text-sm">Комиссия - 0%, быстрая оплата.</p>
            </label>
          </li>
          <li>
            <ul class="flex gap-6">
              <li class="flex items-center">
                <input type="radio" name="pay" id="clickCard" />
                <label for="clickCard">
                  <img class="h-16" src="/src/assets/img/magazin/modal/Frame27.png" alt="" />
                </label>
              </li>
              <li class="space-x-4 flex items-center">
                <input type="radio" name="pay" id="PaymeCard" />
                <label for="PaymeCard">
                  <img class="h-8" src="/src/assets/img/magazin/modal/payme.png" alt="" />
                </label>
              </li>
              <li class="space-x-4 flex items-center">
                <input type="radio" name="pay" id="apelsinCard" />
                <label for="apelsinCard">
                  <img class="h-8" src="/src/assets/img/magazin/modal/apelsin.png" alt="" />
                </label>
              </li>
            </ul>
          </li>
          <li class="space-x-4 flex items-center">
            <input class="" type="radio" name="pay" id="order" />
            <label for="order">
              <h3 class="">Оплата наличными после доставке</h3>
              <p class="text-xs">Оплата полную стоимость товара при получении</p>
            </label>
          </li>
        </ul>
        <ButtonFillVue @click="" class="py-2">Продолжить</ButtonFillVue>
      </form>
    </div>
  </Teleport> -->
</template>

<script setup>
import { ref, computed } from "vue";
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import InputCount from "../components/shop/InputCount.vue";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import numberWithSpaces from "../helpers/numberFormat";
import { useBasketStore } from "../store/basketProducts";
import { useToast } from "vue-toastification";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const basketStore = useBasketStore();
const toast = useToast();
const isOpenModal = ref(false);

let state = ref({ username: "", phone: "" });
const rules = computed(() => {
  return {
    username: { required, minLength: minLength(3), maxLength: maxLength(84) },
    phone: {
      required,
      containsUppercase: helpers.withMessage("The password must be +998901234567", function (value) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
      }),
    },
  };
});
const v$ = useVuelidate(rules, state);
const formLoginData = () => {
  v$.value.$validate();
  if (v$.value.$error) return;
  console.log("api yoziladi");
};
</script>

<style>
.PayModal input:checked + label {
  color: #4f87d3;
}
</style>
