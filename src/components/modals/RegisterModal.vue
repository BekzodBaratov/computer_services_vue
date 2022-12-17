<template>
  <Teleport to="body">
    <div @click="emit('closeRegiterModal')" class="fixed z-[999999] bg-[#0006] inset-0 backdrop-blur-sm"></div>
    <div class="fixed z-[999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
      <div class="loginModalbg p-16 text-[#F4F6F9] text-lg">
        <div class="flex flex-col gap-6">
          <img class="w-28 self-center mb-8" src="../../assets/login/logo.png" alt="logo_img" />
          <form class="flex flex-col gap-6 mb-8">
            <div v-if="currentScore === 1" class="flex flex-col gap-1">
              <label for="telnumber1">Номер телефона:</label>
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="text"
                v-model="userData.tel"
                name="telnumber1"
                id="telnumber1"
                placeholder="+998 90 123 45 67"
              />
            </div>
            <div v-else-if="currentScore === 2" class="flex flex-col gap-1">
              <label for="telcode1">Код из смс:</label>
              <input
                class="bg-transparent border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="number"
                v-model="userData.code"
                name="telcode1"
                id="telcode1"
                placeholder="123-456"
              />
            </div>
            <div v-else-if="currentScore === 3" class="flex flex-col gap-1">
              <label for="telname1">Ваше имя:</label>
              <input
                class="bg-transparent capitalize border min-w-[16rem] border-white rounded-xl py-1 px-3 text-[#f4f4f9] outline-none text-center placeholder:text-[#F4F6F9B2]"
                type="text"
                v-model="userData.name"
                name="telname1"
                id="telname1"
                placeholder="Bekzod"
              />
            </div>
            <div v-else class="">
              <p class="text-center font-semibold text-2xl">
                Вы успешно <br />
                зарегистрировались!
              </p>
            </div>
            <div class="flex items-center gap-4 justify-center">
              <span @click="currentScore--" class="p-1" v-if="currentScore === 2">
                <svg
                  class=""
                  width="0.5rem"
                  height="1rem"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.845 17.3375C7.655 17.3375 7.465 17.2675 7.315 17.1175L0.795 10.5975C-0.265 9.5375 -0.265 7.7975 0.795 6.7375L7.315 0.2175C7.605 -0.0725 8.085 -0.0725 8.375 0.2175C8.665 0.5075 8.665 0.9875 8.375 1.2775L1.855 7.7975C1.375 8.2775 1.375 9.0575 1.855 9.5375L8.375 16.0575C8.665 16.3475 8.665 16.8275 8.375 17.1175C8.225 17.2575 8.035 17.3375 7.845 17.3375Z"
                    fill="#002E69"
                  />
                </svg>
              </span>

              <ButtonFillVue><button @click.prevent="handleRegister" class="py-1 px-4">Далее</button> </ButtonFillVue>
            </div>
          </form>

          <div v-if="currentScore <= 3" class="timeLine relative">
            <div class="absolute z-10 left-0 right-0 top-1/2 h-[1px] bg-[#002e69]"></div>
            <div class="flex items-center justify-between">
              <span v-for="(val, i) in 4" :key="i">
                <svg v-if="i < currentScore" class="relative z-50" width="1.6rem" height="1.6rem" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#002E69" />
                  <path d="M10.6667 15.3337L7 11.667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.9993 8L10.666 15.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else class="relative z-50" width="1.6rem" height="1.6rem" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M11.999 15.1999C11.5324 15.1999 11.0657 15.0199 10.7124 14.6666L6.3657 10.3199C6.17237 10.1266 6.17237 9.8066 6.3657 9.61326C6.55904 9.41993 6.87904 9.41993 7.07237 9.61326L11.419 13.9599C11.739 14.2799 12.259 14.2799 12.579 13.9599L16.9257 9.61326C17.119 9.41993 17.439 9.41993 17.6324 9.61326C17.8257 9.8066 17.8257 10.1266 17.6324 10.3199L13.2857 14.6666C12.9324 15.0199 12.4657 15.1999 11.999 15.1999Z"
                    fill="#002E69"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineEmits, reactive, ref } from "vue";
import { useUserRegister } from "../../store/UserRegister";
import ButtonFillVue from "../buttons/ButtonFill.vue";
const store = useUserRegister();
const userData = reactive({
  tel: "",
  code: "",
  name: "",
});

const currentScore = ref(1);

const handleRegister = () => {
  console.log(userData);

  if (userData.tel.length === 13 && currentScore.value === 1) {
    currentScore.value++;
  }
  if (String(userData.code).length === 6 && currentScore.value === 2) {
    currentScore.value++;
  }
  if (userData.name.length >= 3 && currentScore.value === 3) {
    store.isRegisteration = true;
    store.user = userData;
    emit("closeRegiterModal");
    currentScore.value = 1;
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
.step-item {
  @apply relative flex flex-col justify-center items-center w-20;
}

.step-item:not(:first-child):before {
  @apply content-[''] bg-white absolute w-full h-[1px] 
  right-2/4 top-1/2;
}

.step {
  @apply w-6 h-6 flex z-10 relative 
  bg-white flex justify-center items-center rounded-full font-semibold
   text-white text-blue-900;
}
.active .step {
  @apply bg-blue-900 fill-white;
}
.complete .step {
  @apply bg-blue-900 fill-white;
}
.complete:not(:first-child)::before,
.active:not(:first-child)::before {
  @apply bg-blue-900;
}
</style>
