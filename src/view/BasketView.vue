<template>
  <div class="min-h-screen">
    <SearchFormCompVue />
    <div class="container mx-auto">
      <h1 class="text-3xl text-primary my-4">Оформление заказа</h1>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="space-y-3 mb-6">
          <div class="fio space-y-1">
            <label for="fio" class="block text-primaryBlue">ФИО</label>
            <input
              type="text"
              v-model="state.username"
              placeholder="Ism Familiya"
              class="w-56 p-1 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-primaryBlue text-primary outline-none"
            />
            <br />
            <span class="text-sm text-end text-red-600" v-if="v$.username.$error">{{
              v$.username.$errors[0].$message
            }}</span>
          </div>
          <div class="tel">
            <label for="tel" class="block text-primaryBlue">Телефон рақам</label>
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

        <div class="mb-6 max-w-[600px]">
          <div class="bg-[#4F87D30D] ml-0 md:ml-20 rounded pt-6">
            <div class="cards px-6 flex flex-col gap-3 max-h-[30rem] overflow-scroll">
              <BasketCard
                class="flex-shrink-0"
                v-for="(item, index) in basketStore.products"
                :key="index"
                :item="item"
              />
            </div>
            <div
              v-if="basketStore.productCount > 0"
              class="menu w-full text-primaryBlue rounded-t-xl px-8 py-8 space-y-6 shadow-lg"
            >
              <div class="flex justify-between items-center font-bold">
                <p>{{ $t("all") }}</p>
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
import { ref, computed, reactive, onMounted } from "vue";
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import BasketCard from "../components/card/BasketCard.vue";
import numberWithSpaces from "../helpers/numberFormat";
import { useBasketStore } from "../store/basketProducts";
import { useToast } from "vue-toastification";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import { useRouter } from "vue-router";
const basketStore = useBasketStore();
const toast = useToast();
const router = useRouter();
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

const sendData = reactive({
  amount: basketStore.allSum,
  location: null,
  phone_number: "",
  full_name: "",
  comment: "",
  products: [],
});

sendData.products = computed(() => {
  const arr = [];
  for (let i = 0; i < basketStore.products.length; i++) {
    let obj = {
      id: basketStore.products[i].id,
      amount: basketStore.products[i].count,
    };
    arr.push(obj);
  }
  return arr;
});
const formLoginData = () => {
  v$.value.$validate();
  if (v$.value.$error) return;
  sendData.phone_number = state.value.phone;
  sendData.full_name = state.value.username;
  if (sendData.products.length) {
    axios
      .post("/orders", { ...sendData })
      .then((res) => {
        toast.success("Ваш запрос успешно обработан");
        setTimeout(() => {
          router.push("/");
          localStorage.clear();
        }, 2000);
        setTimeout(() => {
          window.location.reload();
          router.push("/");
        }, 3000);
      })
      .catch((err) => {
        toast.error("Произошла ошибка!");
      });
  } else {
    toast("Выберите хотя бы один продукт!");
  }
};
</script>

<style>
.PayModal input:checked + label {
  color: #4f87d3;
}
</style>
