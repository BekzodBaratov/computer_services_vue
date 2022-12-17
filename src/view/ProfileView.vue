<template>
  <SearchFormCompVue />
  <div class="container mx-auto min-h-screen">
    <p class="text-5xl text-[#002e69] mb-10">Личный кабинет</p>
    <div class="flex justify-between flex-wrap gap-6 mb-8">
      <div class="card bg-white shadow-md p-6 rounded-md min-w-[26rem]">
        <p class="text-[#4F87D3] text-3xl mb-4">Уведомления</p>
        <p class="text-[#4f87d3] text-lg mb-2">Получать на адрес</p>
        <form>
          <div class="border border-[#4F87D3] rounded-md flex gap-2 justify-between px-2 py-1 mb-3 max-w-xs">
            <input
              class="outline-none text-[#002e69] w-full"
              type="email"
              name="email"
              id="email"
              placeholder="timur96@gmail.com"
            />
            <label for="email">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.29737 19.4911C4.56165 19.4904 4.81491 19.3851 5.00178 19.1982L18.7929 5.4071C19.1834 5.01658 19.1834 4.38341 18.7929 3.99289L16.5071 1.70711C16.1166 1.31658 15.4834 1.31658 15.0929 1.70711L1.30177 15.4982C1.1149 15.6851 1.00959 15.9383 1.00888 16.2026L1.00271 18.4946C1.00121 19.049 1.45101 19.4988 2.0054 19.4973L4.29737 19.4911Z"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5996 4.37988L16.1196 6.89987"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          <div class="text-[#4f87d3] flex gap-3 items-center mb-2">
            <input type="radio" name="editProfile" id="tovar" />
            <label for="tovar">Появившиеся товары</label>
          </div>
          <div class="text-[#4f87d3] flex gap-3 items-center mb-2">
            <input type="radio" name="editProfile" id="sale" />
            <label for="sale">Появившиеся товары</label>
          </div>
        </form>
      </div>
      <div class="card bg-white shadow-md p-6 rounded-md min-w-[30rem]">
        <div class="flex justify-between gap-3">
          <p class="text-[#4F87D3] text-3xl mb-6">Персональные данные</p>
          <svg width="1.8rem" height="1.8rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.40035 24.9881C5.66463 24.9874 5.91788 24.8821 6.10476 24.6953L24.2929 6.5071C24.6834 6.11658 24.6834 5.48341 24.2929 5.09289L20.9071 1.70711C20.5166 1.31658 19.8834 1.31658 19.4929 1.70711L1.30474 19.8952C1.11787 20.0821 1.01257 20.3354 1.01185 20.5997L1.00271 23.9946C1.00121 24.549 1.45101 24.9988 2.0054 24.9973L5.40035 24.9881Z"
              stroke="#4F87D3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3457 5.38477L20.6149 8.65394"
              stroke="#4F87D3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="flex gap-8">
          <div class="w-24 h-24 rounded-full overflow-hidden cursor-pointer">
            <!-- <img
              class="obj min-h-full min-w-full object-cover object-bottom"
              src="../assets/img/profile/Без названия.jpg"
              alt="profile image"
            /> -->
            <div class="w-full h-full bg-[#E7F0FE] flex justify-center items-center">
              <svg width="1.6rem" height="1.6rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1895 1H21.0046C23.223 1 25.0003 2.79025 25.0003 4.99566V7.68107"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 7.68107V4.99566C1 2.77728 2.79027 1 4.99568 1H7.74595"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.1895 24.9994H21.0046C23.223 24.9994 25.0003 23.2092 25.0003 21.0038V18.3184"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 18.3184V21.0038C1 23.2222 2.79027 24.9994 4.99568 24.9994H7.74595"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.6163 18.9412C18.4238 17.8515 15.8033 17.2158 13.0011 17.2158C10.1082 17.2158 7.42276 17.8904 5.19141 19.045"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0016 12.6369C15.108 12.6369 16.8156 10.9293 16.8156 8.82285C16.8156 6.7164 15.108 5.00879 13.0016 5.00879C10.8951 5.00879 9.1875 6.7164 9.1875 8.82285C9.1875 10.9293 10.8951 12.6369 13.0016 12.6369Z"
                  stroke="#4F87D3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col items-start gap-3">
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="dataEmail">Электронная почта</label>
              <input
                class="border border-[#4f87d3] rounded-md py-1 px-3 outline-none text-[#002e69] min-w-[16rem]"
                type="email"
                name="dataEmail"
                id="dataEmail"
                placeholder="timur96@gmail.com"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="dataEmail">ФИО</label>
              <input
                class="border border-[#4f87d3] rounded-md py-1 px-3 outline-none text-[#002e69] min-w-[16rem]"
                type="text"
                name="dataName"
                id="dataname"
                placeholder="Тимур Зафаров"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="dataEmail">Телефон</label>
              <input
                class="border border-[#4f87d3] rounded-md py-1 px-3 outline-none text-[#002e69] min-w-[16rem]"
                type="text"
                name="dataTel"
                id="dataTel"
                placeholder="+998 90 123 45 67"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="dataEmail">Пароль</label>
              <input
                class="border border-[#4f87d3] rounded-md py-1 px-3 outline-none text-[#002e69] min-w-[16rem]"
                type="password"
                name="dataPass"
                id="dataPass"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card bg-white shadow-md p-6 rounded-md min-w-[24rem]">
        <div class="flex justify-between gap-3">
          <p class="text-[#4F87D3] text-3xl mb-6">Адрес доставки</p>
          <svg width="1.8rem" height="1.8rem" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.40035 24.9881C5.66463 24.9874 5.91788 24.8821 6.10476 24.6953L24.2929 6.5071C24.6834 6.11658 24.6834 5.48341 24.2929 5.09289L20.9071 1.70711C20.5166 1.31658 19.8834 1.31658 19.4929 1.70711L1.30474 19.8952C1.11787 20.0821 1.01257 20.3354 1.01185 20.5997L1.00271 23.9946C1.00121 24.549 1.45101 24.9988 2.0054 24.9973L5.40035 24.9881Z"
              stroke="#4F87D3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3457 5.38477L20.6149 8.65394"
              stroke="#4F87D3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <form>
          <div class="flex flex-col mb-4">
            <label class="text-[#4f86d38d]" for="dataStreet">Название улицы</label>
            <input
              class="border border-[#4f87d3] rounded-md py-1 px-3 outline-none text-[#002e69] min-w-[10rem]"
              type="text"
              name="dataStreet"
              id="dataStreet"
              placeholder="Улица Чарос"
            />
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="home">Дом</label>
              <input
                class="border border-[#4f87d3] rounded-md text-center py-1 px-3 outline-none text-[#002e69] w-[3rem]"
                type="number"
                name="number"
                id="home"
                placeholder="1"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="kv">Кв.</label>
              <input
                class="border border-[#4f87d3] text-center rounded-md py-1 px-3 outline-none text-[#002e69] w-[3rem]"
                type="number"
                name="number"
                id="kv"
                placeholder="1"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-[#4f86d38d]" for="pod">Под.</label>
              <input
                class="border border-[#4f87d3] text-center rounded-md py-1 px-3 outline-none text-[#002e69] w-[3rem]"
                type="number"
                name="number"
                id="pod"
                placeholder="1"
              />
            </div>
          </div>
          <textarea
            class="border border-[#4f87d3] placeholder:text-[#4f87d3] rounded-md my-4 py-1 px-3 outline-none text-[#002e69] w-full"
            name="comment"
            id="comment"
            rows="5"
            placeholder="Комментарий к доставке"
          ></textarea>
          <div class="flex justify-center items-center">
            <ButtonFillVue><span class="py-2"> Добавить адрес доставки</span></ButtonFillVue>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";
</script>
