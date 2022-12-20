<template>
  <Teleport to="body">
    <div @click="emit('closeLoginModal')" class="fixed z-[999999] inset-0 bg-[#0006] backdrop-blur-sm"></div>
    <div class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="loginModalbg p-16 text-[#F4F6F9] text-lg">
        <div class="flex flex-col gap-6">
          <img class="w-28 self-center mb-8" src="../../assets/login/logo.png" alt="" />
          <form class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="text"
                v-model="telNumber"
                name="telnumber"
                id="telnumber"
                placeholder="Номер телефона"
              />
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="number"
                v-model="telCode"
                name="telcode"
                id="telcode"
                placeholder="Пароль"
              />
            </div>
            <div class="flex justify-center">
              <button type="submit" @click.prevent="formLoginData">
                <ButtonFillVue><span class="py-1 px-4">Вход</span> </ButtonFillVue>
              </button>
            </div>
          </form>
          <div class="flex justify-between items-center">
            <div @click="emit('changeTo')" class="underline hover:no-underline active:no-underline cursor-pointer">
              Регистрация
            </div>
            <div @click="emit('changeTo')" class="underline hover:no-underline active:no-underline cursor-pointer">
              Забыли пароль?
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import ButtonFillVue from "../buttons/ButtonFill.vue";
import { useUserRegister } from "../../store/UserRegister";
const store = useUserRegister();

const telNumber = ref("");
const telCode = ref();
let user;

const formLoginData = () => {
  if (telNumber.value.length === 13 && String(telCode.value).length === 6) {
    user = store.users.find((val, i) => val.tel === telNumber.value && val.code === telCode.value);

    if (String(user).length) {
      store.user = user.id;
      emit("closeLoginModal");
      emit("loginBtn");
      store.isRegisteration = true;
    }
  }
};

const emit = defineEmits(["closeLoginModal", "changeTo", "loginBtn"]);
</script>

<style>
.loginModalbg {
  background: linear-gradient(180deg, rgba(79, 135, 211, 0.95) 0%, rgba(32, 95, 184, 0.95) 100%);
  border: 3px solid #f4f6f9;
  border-radius: 33px;
}
</style>
