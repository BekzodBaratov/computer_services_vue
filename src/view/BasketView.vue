<template>
  <div class="min-h-screen">
    <SearchFormCompVue />
    <div class="container mx-auto">
      <h1 class="text-3xl text-[#002E69] my-4">Оформление заказа</h1>
      <div class="grid grid-cols-2">
        <div class="space-y-3 mb-6">
          <div class="flex flex-col gap-1">
            <label for="adress "><span class="text-[#4F87D3]">Адрес доставки</span></label>
            <textarea
              class="w-80 p-2 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-[#4F87D3] text-[#002E69] outline-none"
              placeholder="г. Ташкент, Юнусабадский район, Улица Чарос, дом 30, квартира 7"
              maxlength="1000"
              cols="30"
              rows="3"
              name="adress"
              id="adress"
            ></textarea>
          </div>
          <textarea
            class="w-80 p-2 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-[#4F87D3] text-[#002E69] outline-none"
            placeholder="Комментарий к доставке"
            maxlength="1000"
            cols="30"
            rows="3"
            id="comment"
          ></textarea>
          <div class="fio space-y-1">
            <label for="fio" class="block text-[#4F87D3]">ФИО</label>
            <input
              type="text"
              id="fio"
              placeholder="Тимур Зафаров"
              maxlength="255"
              minlength="0"
              class="w-56 p-1 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-[#4F87D3] text-[#002E69] outline-none"
            />
          </div>
          <div class="tel">
            <label for="tel" class="block text-[#4F87D3]">ФИО</label>
            <input
              type="number"
              id="tel"
              placeholder="(90) 123 45 67"
              maxlength="255"
              minlength="0"
              class="w-56 p-1 border rounded bg-transparent placeholder:text-[#4f86d3ae] border-[#4F87D3] text-[#002E69] outline-none"
            />
          </div>
          <div class="flex flex-col items-start gap-3 pt-3">
            <ButtonFillVue class="py-2">Выбрать способ оплаты</ButtonFillVue>
            <ButtonFillVue color="#B51136" class="py-2">Оплатить и заказать </ButtonFillVue>
          </div>
        </div>

        <div class="mb-6">
          <div class="bg-[#4F87D30D] mx-28 rounded pt-6">
            <div class="cards px-6 flex flex-col gap-3 max-h-[30rem] min-h-[20rem] overflow-auto">
              <div class="card bg-white rounded-xl grid grid-cols-2 max-h-52 text-sm shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                <div class="img">
                  <img
                    class="object-contain object-center"
                    src="../assets/img/magazin/card/Rectangle 64.png"
                    alt="cardImg"
                  />
                </div>
                <div class="rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-[#4F87D3]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p class="ml-2 text-[#4F87D3]">4.95</p>
                      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
                      <p class="text-[#4F87D3] underline">50 отзывов</p>
                    </div>
                  </div>
                  <h3 class="">Intel CORE i3 10100 CPU Socket LGA 1200 3.60G...</h3>
                  <div class="text-[#4F87D3]">В наличии</div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold">999 000 сум</p>
                    <form>
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
                </div>
              </div>
              <div class="card bg-white rounded-xl grid grid-cols-2 max-h-52 text-sm shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                <div class="img">
                  <img
                    class="object-contain object-center"
                    src="../assets/img/magazin/card/Rectangle 64.png"
                    alt="cardImg"
                  />
                </div>
                <div class="rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-[#4F87D3]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p class="ml-2 text-[#4F87D3]">4.95</p>
                      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
                      <p class="text-[#4F87D3] underline">50 отзывов</p>
                    </div>
                  </div>
                  <h3 class="">Intel CORE i3 10100 CPU Socket LGA 1200 3.60G...</h3>
                  <div class="text-[#4F87D3]">В наличии</div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold">999 000 сум</p>
                    <form>
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
                </div>
              </div>
              <div class="card bg-white rounded-xl grid grid-cols-2 max-h-52 text-sm shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                <div class="img">
                  <img
                    class="object-contain object-center"
                    src="../assets/img/magazin/card/Rectangle 64.png"
                    alt="cardImg"
                  />
                </div>
                <div class="rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-[#4F87D3]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p class="ml-2 text-[#4F87D3]">4.95</p>
                      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
                      <p class="text-[#4F87D3] underline">50 отзывов</p>
                    </div>
                  </div>
                  <h3 class="">Intel CORE i3 10100 CPU Socket LGA 1200 3.60G...</h3>
                  <div class="text-[#4F87D3]">В наличии</div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold">999 000 сум</p>
                    <form>
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
                </div>
              </div>
              <div class="card bg-white rounded-xl grid grid-cols-2 max-h-52 text-sm shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                <div class="img">
                  <img
                    class="object-contain object-center"
                    src="../assets/img/magazin/card/Rectangle 64.png"
                    alt="cardImg"
                  />
                </div>
                <div class="rounded-xl bg-[#F4F6F9] flex flex-col gap-3 p-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-[#4F87D3]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p class="ml-2 text-[#4F87D3]">4.95</p>
                      <span class="w-1 h-1 mx-3 bg-[#769acd] rounded-full"></span>
                      <p class="text-[#4F87D3] underline">50 отзывов</p>
                    </div>
                  </div>
                  <h3 class="">Intel CORE i3 10100 CPU Socket LGA 1200 3.60G...</h3>
                  <div class="text-[#4F87D3]">В наличии</div>
                  <div class="flex justify-between items-center">
                    <p class="font-semibold">999 000 сум</p>
                    <form>
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
                </div>
              </div>
            </div>
            <div class="menu w-full text-[#4F87D3] rounded-t-xl px-8 py-8 space-y-6 h-[1/3] shadow-lg">
              <div class="flex justify-between items-center gap-3">
                <ButtonStrokeVue :disabled="true" class="py-2">Введите промокод</ButtonStrokeVue>
                <ButtonStrokeVue to="" class="py-2">Применить</ButtonStrokeVue>
              </div>
              <div class="space-y-1">
                <div class="flex justify-between items-center">
                  <p>Товар (2)</p>
                  <p>1 998 000 сум</p>
                </div>
                <div class="flex justify-between items-center">
                  <p>Сумма скидки</p>
                  <p class="text-red-500">-200 000 сум</p>
                </div>
              </div>
              <div class="flex justify-between items-center font-bold">
                <p>Итого</p>
                <p>1 798 000 сум</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchFormCompVue from "../components/shop/SearchFormComp.vue";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import ButtonStrokeVue from "../components/buttons/ButtonStroke.vue";

const count = ref(1);
const countFunc = (val) => {
  if (count.value > 0) {
    val ? count.value++ : count.value--;
  }
};
</script>
