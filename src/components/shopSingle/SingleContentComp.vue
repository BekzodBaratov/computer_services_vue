<template>
  <div class="">
    <div class="grid grid-cols-5">
      <div class="col-span-3">
        <p class="text-[#4F87D3CC] text-xl">Количество</p>
        <form class="">
          <span class="flex gap-2">
            <button @click.prevent="countFunc(false)" class="text-[#002E69]">
              <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.12 2.104H10.136V0.296H0.12V2.104Z" fill="#002E69" />
              </svg>
            </button>
            <input
              :value="count"
              maxlength="5"
              minlength="0"
              class="border w-10 my-1 py-[2px] text-sm border-[#AECBF4] rounded-lg text-[#002E69] text-center"
              type="number"
              id="countProd"
            />
            <button @click.prevent="countFunc(true)">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.0400001 5.768H8.456V3.768H0.0400001V5.768ZM3.176 0.552V8.984H5.32V0.552H3.176Z"
                  fill="#002E69"
                />
              </svg>
            </button>
          </span>
        </form>
      </div>
      <div class="col-span-2">
        <div class="bg-[#AECBF4] rounded-xl px-4 py-2 w-56">
          <p class="text-2xl text-[#D52C55] font-semibold text-center pb-2">790 000 сум</p>
          <div class="flex gap-1">
            <div
              class="bg-[#002E69] text-[#F4F6F9] px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer"
            >
              Купить
            </div>
            <div class="p-2 rounded-lg border border-[#002E69] flex items-center justify-center cursor-pointer">
              <img src="../../assets/img/magazin/Vector.svg" alt="" />
            </div>
            <div class="p-2 rounded-lg border border-[#002E69] flex items-center justify-center cursor-pointer">
              <img src="../../assets/img/magazin/shopping-cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(1);
const countFunc = (val) => {
  val ? count.value++ : count.value--;
};
</script>
