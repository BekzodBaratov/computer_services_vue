<template>
  <Teleport to="body">
    <div @click="emit('closeRegiterModal')" class="fixed z-[999999] bg-[#0006] inset-0 backdrop-blur-sm"></div>
    <div class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
      <div class="loginModalbg px-16 py-4 text-[#F4F6F9] text-lg relative">
        <div class="flex flex-col gap-6">
          <img class="w-28 self-center mb-1" src="../../assets/login/logo.png" alt="logo_img" />
          <form class="flex flex-col gap-2 mb-8">
            <div class="name flex flex-col gap-0">
              <label for="username text-sm">Логин:</label>
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#f4f6f927]"
                type="text"
                v-model="userData.username"
                name="username"
                id="username"
                placeholder="Введите ваш логин"
              />
              <p v-if="v$.username.$error" class="text-sm text-end text-red-600">
                {{ v$.username.$errors[0].$message }}*
              </p>
            </div>
            <div class="email flex flex-col gap-0">
              <label for="email">Электронная почта:</label>
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#f4f6f927]"
                type="email"
                v-model="userData.email"
                name="email"
                id="email"
                placeholder="Введите электронной почты"
              />
              <p v-if="v$.email.$error" class="text-sm text-end text-red-600">{{ v$.email.$errors[0].$message }}*</p>
            </div>
            <div class="password flex flex-col gap-0">
              <label for="password">Пароль:</label>
              <input
                class="bg-transparent capitalize border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="password"
                v-model="userData.password"
                name="password"
                id="password"
              />
              <p v-if="v$.password.$error" class="text-sm text-end text-red-600">
                {{ v$.password.$errors[0].$message }}*
              </p>
            </div>
            <div class="confirmPassword flex flex-col gap-0">
              <label for="passwordConfirm">Подтвердите пароль:</label>
              <input
                class="bg-transparent capitalize border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="password"
                v-model="userData.passwordConfirm"
                name="passwordConfirm"
                id="passwordConfirm"
              />
              <p v-if="v$.passwordConfirm.$error" class="text-sm text-end text-red-600">
                {{ v$.passwordConfirm.$errors[0].$message }}*
              </p>
            </div>

            <div class="flex justify-center mt-3">
              <ButtonFillVue>
                <button @click.prevent="handleRegister" class="py-1 px-4">Далее</button>
              </ButtonFillVue>
            </div>
          </form>
        </div>
        <div @click="emit('closeRegiterModal')" class="absolute top-3 right-3 text-xl">
          <i class="fa-solid fa-xmark p-3 duration-200 hover:opacity-40"></i>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, minLength, maxLength } from "@vuelidate/validators";

import { useUserRegister } from "../../store/UserRegister";
import ButtonFillVue from "../buttons/ButtonFill.vue";

const store = useUserRegister();

const userData = reactive({
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(3), maxLength: maxLength(52) },
    email: { required, email, maxLength: maxLength(84) },
    password: { required, minLength: minLength(4), maxLength: maxLength(32) },
    passwordConfirm: { required, sameAs: sameAs(userData.password) },
  };
});

const v$ = useVuelidate(rules, userData);

const handleRegister = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      await store.signup(userData);
      !store.closemodal && emit("closeRegiterModal");
    } finally {
      userData.username = "";
      userData.email = "";
      userData.password = "";
      userData.passwordConfirm = "";
    }
  }
};

const emit = defineEmits(["closeRegiterModal"]);
</script>

<style>
.loginModalbg {
  background: linear-gradient(180deg, rgba(79, 135, 211, 0.95) 0%, rgba(32, 95, 184, 0.95) 100%);
  border: 3px solid #f4f6f9;
  border-radius: 33px;
}
</style>
