<template>
  <div class="container mx-auto">
    <div class="header grid grid-cols-2 justify-between items-center pt-[44px] ">
      <div class="">
        <h2 class="text-[#002E69] text-[56px] leading-[80.92px] font-semibold">КОНФИГУРАТОР ПК</h2>
        <p class="text-[32px] font-normal leading-[46.24px] text-[#002E69] mt-[21px]">Сборка компьютера, о котором вы
          мечтали.
          Вы можете изменить комплектацию представ-ленных на сайте сборок, узнать цену онлайн, сравнить характеристики.
          Оформите заказ и получите готовый Кейс.</p>
      </div>
      <div class="w-full">
        <img src="src/assets/img/static/Group.svg" class="w-full h-[569px]">
      </div>
    </div>
    <!-- pastki section -->
    <div class="body grid grid-cols-[4fr,1fr] mt-11 gap-6 mb-[90px]">
      <div class="grid grid-cols-[2fr,4fr] bg-[#4f87d30d]">
        <div class="px-[20px] py-[10px]">
          <div class="mt-[20px]" v-for="item, index in 10" :key="index">
            <p
              class="font-medium text-[32px] leading-[46px] text-[#002e6980] cursor-pointer transition-all duration-300 hover:text-[#002E69]">
              Процессор</p>
          </div>
        </div>
        <div class="pl-[30px] pr-[50px]  h-[100vh] overflow-y-scroll my-[60px]">
          <!-- select option 1 -->
          <div class="flex justify-between gap-[15px] items-center mb-[80px]" v-for="item, index in 2" :key="index">
            <p class="text-[#002E69] text-[32px] leading-[46px] font-medium">Материнская плата</p>
            <div class="size w-[230px] h-[62px]">

              <select id="countries"
                class="bg-transparent border border-[#002E69] text-[#002e694d] text-[22px] leading-[46px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Size By</option>
                <option v-for="(item, index) in 6" :key="index">
                  option
                </option>

              </select>
            </div>
          </div>
          <!-- input tupy radio -->
          <div class="mb-[40px] mx-auto">
            <div class="" v-for="item, index in 3" :key="index">
              <div class="flex gap-[20px] items-center mt-2">
                <input type="radio" id="index" name="index" class="">
                <div>
                  <p class="text-[#002E69] text-[24px] leading-[35px] font-medium">Intel Box</p>
                  <p class="text-[#D52C55] text-[16px] leading-[23px] font-normal">80 000 сум</p>
                </div>
              </div>
            </div>
          </div>
          <!-- select option 2 -->
          <div class="flex justify-between gap-[15px] items-center mb-[80px]" v-for="item, index in 8" :key="index">
            <p class="text-[#002E69] text-[32px] leading-[46px] font-medium">Материнская плата</p>
            <div class="size w-[230px] h-[62px]">

              <select id="countries"
                class="bg-transparent border border-[#002E69] text-[#002e694d] text-[22px] leading-[46px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Size By</option>
                <option v-for="(item, index) in 6" :key="index">
                  option {{ index + 1 }}
                </option>

              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- left result -->
      <div class="mx-auto bg-[#4f87d30d] py-[50px] px-[68px]">
        <div class="flex flex-col">
          <div class="mx-auto">
            <img src="src/assets/img/static/comp.svg">
          </div>
          <div class="bg-[#aecbf433] rounded-[10px] px-[23px] pb-[22px] pt-2 text-center w-[257px] mt-[32px]">
            <p class="text-[#D52C55] font-bold text-[32px] leading-[46px]">100 000 сум</p>
            <div class="flex gap-2 mt-2 ">
              <div
                class="bg-[#002E69] transition-all duration-500 hover:bg-black rounded-[15px] px-4 py-2 text-[#F4F6F9] text-[24px] cursor-pointer leading-[35px] font-normal flex justify-center items-center">
                Купить
              </div>
              <div
                class="border border-solid border-[#002E69] rounded-[15px] flex justify-center items-center px-[9px] py-[11px] cursor-pointer w-[50px] h-[50px]">
                <i class="fa-regular fa-heart text-[30px]"></i>
              </div>
              <div
                class="border border-solid border-[#002E69] rounded-[15px] flex justify-center items-center px-[9px] py-[11px] cursor-pointer w-[50px] h-[50px]">
                <img src="src/assets/img/static/cart.svg" class="">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>




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