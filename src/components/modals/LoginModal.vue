<template>
  <Teleport to="body">
    <div
      @click="emit('closeLoginModal')"
      class="fixed z-[999999] inset-0 bg-[#0006] backdrop-blur-sm"
    ></div>
    <div
      class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div class="loginModalbg p-16 text-[#F4F6F9] text-lg">
        <div class="flex flex-col gap-6">
          <img
            class="w-28 self-center mb-8"
            src="../../assets/login/logo.png"
            alt=""
          />
          <form class="flex flex-col gap-6">
            <div class="flex flex-col">
              <div class="mb-4 flex flex-col">
                <input
                  class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                  type="email"
                  v-model="state.email"
                  name="email"
                  id="email"
                  placeholder="john@gmail.com"
                />
                <span
                  class="text-sm text-end text-red-600"
                  v-if="v$.email.$error"
                  >{{ v$.email.$errors[0].$message }}</span
                >
              </div>
              <div class="flex flex-col">
                <input
                  class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                  type="password"
                  v-model="state.password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                />
                <span
                  class="text-sm text-end text-red-600"
                  v-if="v$.password.$error"
                  >{{ v$.password.$errors[0].$message }}</span
                >
              </div>
            </div>
            <div class="flex justify-center">
              <button type="submit" @click.prevent="formLoginData">
                <ButtonFillVue>
                  <span class="py-1 px-4">Вход</span>
                </ButtonFillVue>
              </button>
            </div>
          </form>
          <div class="flex justify-between items-center">
            <div
              @click="emit('changeTo')"
              class="underline hover:no-underline active:no-underline cursor-pointer"
            >
              Регистрация
            </div>
            <div
              @click="emit('changeTo')"
              class="underline hover:no-underline active:no-underline cursor-pointer"
            >
              Забыли пароль?
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
  <LoadingModalVue v-if="loading" />
</template>

<script setup>
import { defineEmits, ref, reactive, computed } from "vue";
import {
  required,
  email,
  minLength,
  helpers,
  maxLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";

import ButtonFillVue from "../buttons/ButtonFill.vue";
import { useUserRegister } from "../../store/UserRegister";
import LoadingModalVue from "./LoadingModal.vue";

const store = useUserRegister();

const loading = ref(false);

const state = reactive({
  email: "",
  password: "",
});
const rules = computed(() => {
  return {
    email: { required, email, maxLength: maxLength(84) },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(32),
      containsUppercase: helpers.withMessage(
        "The password requires an uppercase character",
        function (value) {
          return /[A-Z]/.test(value);
        }
      ),
      containsLowercase: helpers.withMessage(
        "The password requires an lowercase character",
        function (value) {
          return /[a-z]/.test(value);
        }
      ),
      containsNumber: helpers.withMessage(
        "The password requires an number character",
        function (value) {
          return /[0-9]/.test(value);
        }
      ),
      containsSpecial: helpers.withMessage(
        "The password requires an special character",
        function (value) {
          return /[#?!_@$%^&*-]/.test(value);
        }
      ),
    },
  };
});

const v$ = useVuelidate(rules, state);

const formLoginData = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    fetchApi(state);
  }
};

const fetchApi = (data) => {
  axios({
    method: "post",
    url: "users/signin",
    withCredentials: true,
    data: data,
  })
    .then(function (response) {
      store.user = response.data.data.user;
      console.log(response);
      emit("closeLoginModal");
      alert(response.data.message);
    })
    .catch(function (error) {
      alert(error.message + ", Please try again");

      state.email = "";
      state.password = "";
    })
    .finally(function () {
      loading.value = false;
    });
};

const emit = defineEmits(["closeLoginModal", "changeTo"]);
</script>

<style>
.loginModalbg {
  background: linear-gradient(
    180deg,
    rgba(79, 135, 211, 0.95) 0%,
    rgba(32, 95, 184, 0.95) 100%
  );
  border: 3px solid #f4f6f9;
  border-radius: 33px;
}
</style>
