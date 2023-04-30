<template>
  <div>
    <div
      class="container mx-auto mt-4 flex justify-between items-center md:w-4/5 mb-6"
    >
      <form class="form items-center flex gap-4">
        <div
          class="SearchForm flex items-center p-0 border border-[#0003] rounded-3xl overflow-hidden"
        >
          <button
            @click.prevent="(e) => searchFrom(e)"
            class="all px-3 md:px-6 py-1 rounded-r-2xl text-primary font-semibold cursor-pointer bg-whiteBlue"
          >
            Search
          </button>
          <input
            type="text"
            id="search-input"
            v-model="search"
            class="searchInp w-28 md:w-40 lg:w-56 px-2 py-1 outline-none bg-transparent"
            :placeholder="t('market.hero.search')"
          />
          <label for="search-input" class="searchIcon pr-4 cursor-pointer">
            <img :src="SearchIcon" class="h-6 md:h-7" alt="searchIcon" />
          </label>
        </div>
      </form>

      <div class="flex items-end gap-4 h-full">
        <!--      <RouterLink to="/favorites" @click="savedFunc" class="shopcart flex flex-col items-center cursor-pointer">-->
        <!--        <i class="fa-heart text-[2rem] text-primary fa-regular"></i>-->
        <!--        <i class="hidden fa-heart text-[2rem] text-primary fa-solid"></i>-->
        <!--        <div class="text hidden md:block">{{ t("market.hero.favorite") }}</div>-->
        <!--      </RouterLink>-->

        <div
          @click="open = true"
          class="izbrannoe flex flex-col items-center cursor-pointer"
        >
          <svg
            class="w-8 h-8"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5269 25.8853H10.9957C9.55191 25.8853 8.16649 25.2728 7.18941 24.2082C6.21233 23.1436 5.7165 21.7144 5.83317 20.2707L7.04359 5.74567C7.08734 5.29359 6.92691 4.8561 6.62066 4.52068C6.31441 4.18526 5.8915 4.01025 5.43941 4.01025H2.9165C2.31859 4.01025 1.82275 3.51442 1.82275 2.9165C1.82275 2.31859 2.31859 1.82275 2.9165 1.82275H5.45401C6.5186 1.82275 7.52483 2.27483 8.23941 3.04775C8.63316 3.48525 8.92483 3.99568 9.08525 4.56443H27.2998C28.7728 4.56443 30.129 5.14775 31.1207 6.19775C32.0977 7.26234 32.5936 8.64776 32.4769 10.1207L31.6894 21.0582C31.529 23.7269 29.1957 25.8853 26.5269 25.8853ZM9.15817 6.73733L8.02067 20.4457C7.94775 21.2915 8.22484 22.0936 8.79359 22.7207C9.36234 23.3477 10.1498 23.6832 10.9957 23.6832H26.5269C28.0436 23.6832 29.4144 22.3998 29.5311 20.8832L30.3186 9.94568C30.3769 9.08526 30.0998 8.2686 29.5311 7.67068C28.9623 7.05819 28.1748 6.72273 27.3144 6.72273H9.15817V6.73733Z"
              fill="#002E69"
            />
            <path
              d="M23.6979 33.1771C22.0938 33.1771 20.7812 31.8646 20.7812 30.2604C20.7812 28.6562 22.0938 27.3438 23.6979 27.3438C25.3021 27.3438 26.6146 28.6562 26.6146 30.2604C26.6146 31.8646 25.3021 33.1771 23.6979 33.1771ZM23.6979 29.5312C23.2896 29.5312 22.9688 29.8521 22.9688 30.2604C22.9688 30.6687 23.2896 30.9896 23.6979 30.9896C24.1063 30.9896 24.4271 30.6687 24.4271 30.2604C24.4271 29.8521 24.1063 29.5312 23.6979 29.5312Z"
              fill="#002E69"
            />
            <path
              d="M12.0314 33.1771C10.4272 33.1771 9.11475 31.8646 9.11475 30.2604C9.11475 28.6562 10.4272 27.3438 12.0314 27.3438C13.6356 27.3438 14.9481 28.6562 14.9481 30.2604C14.9481 31.8646 13.6356 33.1771 12.0314 33.1771ZM12.0314 29.5312C11.6231 29.5312 11.3022 29.8521 11.3022 30.2604C11.3022 30.6687 11.6231 30.9896 12.0314 30.9896C12.4397 30.9896 12.7606 30.6687 12.7606 30.2604C12.7606 29.8521 12.4397 29.5312 12.0314 29.5312Z"
              fill="#002E69"
            />
            <path
              d="M30.625 12.7603H13.125C12.5271 12.7603 12.0312 12.2644 12.0312 11.6665C12.0312 11.0686 12.5271 10.5728 13.125 10.5728H30.625C31.2229 10.5728 31.7188 11.0686 31.7188 11.6665C31.7188 12.2644 31.2229 12.7603 30.625 12.7603Z"
              fill="#002E69"
            />
          </svg>
          <div class="text hidden md:block">{{ t("market.hero.shop") }}</div>
        </div>
      </div>
    </div>

    <Teleport class="basket" to="body">
      <div
        @click="open = false"
        v-if="open"
        class="modal fixed z-[99999] inset-0 bg-[#0005] backdrop-blur-sm"
      ></div>
      <div
        :class="open ? 'translate-x-0' : 'translate-x-full'"
        class="fixed w-[30rem] inset-y-0 z-[99999] duration-300 right-0 bg-blue-500 text-center flex flex-col justify-between items-center"
      >
        <div class="text-start pt-2 space-y-2 overflow-y-auto h-[2/3]">
          <p class="text-white text-3xl text-center">Корзина</p>
          <!-- empty component start-->
          <div
            v-if="!store.productCount"
            class="empty px-12 text-white flex flex-col gap-3"
          >
            <div class="empty_img self-center">
              <svg
                width="12rem"
                height="10rem"
                viewBox="0 0 256 222"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M215.914 78.276L113.984 57.9014L44.2363 86.1794L165.612 110.458L215.914 78.276Z"
                  fill="#AE8350"
                />
                <path
                  d="M215.914 78.2764L113.984 57.9018L128.275 0L233.124 20.9622L215.914 78.2764Z"
                  fill="#DBC09E"
                />
                <path
                  d="M165.613 221.221L215.915 182.746V78.2764L165.613 110.459V221.221Z"
                  fill="#B89572"
                />
                <g style="mix-blend-mode: multiply" opacity="0.5">
                  <path
                    d="M113.984 57.9014V172.871L44.2363 190.649V86.1794L113.984 57.9014Z"
                    fill="#AE8350"
                  />
                </g>
                <path
                  d="M215.915 78.2766L256.001 73.8984L215.233 105.74L165.613 110.459L215.915 78.2766Z"
                  fill="#DBC09E"
                />
                <g style="mix-blend-mode: soft-light">
                  <path
                    d="M165.613 110.459L215.915 78.2764L217.791 78.0869L169.044 110.137L165.613 110.459Z"
                    fill="white"
                  />
                </g>
                <g style="mix-blend-mode: soft-light">
                  <path
                    d="M215.914 78.2765L113.984 57.9019L114.326 56.5752L216.218 77.2152L215.914 78.2765Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M84.1145 25.9277L113.985 57.9017L44.2371 86.1797L10.1973 41.3556L84.1145 25.9277Z"
                  fill="#DBC09E"
                />
                <g style="mix-blend-mode: soft-light">
                  <path
                    d="M113.984 57.9015L113.245 57.1055L43.4219 85.1182L44.2369 86.1796L113.984 57.9015Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M165.612 221.221L44.2363 190.649V86.1797L165.612 110.459V221.221Z"
                  fill="#C6A37D"
                />
                <path
                  d="M118.476 154.714L0 127.971L44.2366 86.1797L165.612 110.459L118.476 154.714Z"
                  fill="#DBC09E"
                />
                <g style="mix-blend-mode: soft-light">
                  <path
                    d="M164.21 111.766L43.0801 87.26L44.2362 86.1797L165.612 110.459L164.21 111.766Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M156.988 176.359L141.75 172.72V170.806L156.988 174.445V176.359Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 177.667L141.75 174.028V173.308L156.988 176.947V177.667Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 179.221L141.75 175.601V174.881L156.988 178.52V179.221Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 180.851L141.75 177.231V176.511L156.988 180.15V180.851Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 182.614L141.75 178.975V178.273L156.988 181.893V182.614Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 184.244L141.75 180.605V179.903L156.988 183.523V184.244Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 187.447L141.75 183.808V182.178L156.988 185.817V187.447Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 191.654L141.75 188.034V187.313L156.988 190.952V191.654Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 189.778L141.75 186.158V185.438L156.988 189.077V189.778Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 193.227L141.75 189.588V188.887L156.988 192.507V193.227Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 194.857L141.75 191.218V190.517L156.988 194.137V194.857Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 196.62L141.75 192.981V192.261L156.988 195.9V196.62Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 198.25L141.75 194.611V193.891L156.988 197.53V198.25Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 200.372L141.75 196.752V195.104L156.988 198.743V200.372Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 202.76L141.75 199.121V197.491L156.988 201.13V202.76Z"
                  fill="#4E2B07"
                />
                <path
                  d="M156.988 206.02L141.75 202.381V200.221L156.988 203.86V206.02Z"
                  fill="#4E2B07"
                />
                <g opacity="0.2">
                  <path
                    d="M64.4409 164.892L57.6367 158.77L62.0338 153.084C62.3535 152.819 62.7558 152.674 63.171 152.674C63.5863 152.674 63.9885 152.819 64.3082 153.084C66.1666 154.826 67.5886 156.982 68.459 159.376L64.4409 164.892Z"
                    fill="#5C3A0D"
                  />
                  <path
                    d="M64.9902 152.326L74.7132 154.638C74.7132 154.638 77.234 155.586 79.0914 160.893L81.7258 160.286L77.7078 166.503L69.6906 164.077L71.5859 163.186C71.5859 163.186 69.3874 155.529 64.9902 152.326Z"
                    fill="#5C3A0D"
                  />
                  <path
                    d="M75.168 168.683L82.1996 166.257L86.2935 174.141C86.2935 174.141 86.8621 175.658 85.7059 176.264C83.5446 176.874 81.2476 176.801 79.1292 176.056L75.168 168.683Z"
                    fill="#5C3A0D"
                  />
                  <path
                    d="M86.3131 177.496L82.0296 185.419C82.0296 185.419 80.6082 186.783 75.415 185.078V188.129L70.7715 180.169L75.017 174.236L75.1307 176.662C75.1307 176.662 82.4466 179.543 86.3131 177.496Z"
                    fill="#5C3A0D"
                  />
                  <path
                    d="M68.895 175.525V183.675L60.7452 181.78C60.3204 181.602 59.9479 181.319 59.6627 180.958C59.3775 180.596 59.1891 180.168 59.1152 179.714C59.1608 177.554 59.9432 175.474 61.3328 173.819L68.895 175.525Z"
                    fill="#5C3A0D"
                  />
                  <path
                    d="M57.826 179.258L52.557 169.782C52.557 169.782 51.4956 167.204 54.566 163.736L52.1211 161.67L60.3847 163.186L64.1753 171.128L61.9957 169.725C61.9957 169.725 57.2574 174.255 57.826 179.258Z"
                    fill="#5C3A0D"
                  />
                </g>
              </svg>
            </div>
            <p class="titleName text-2xl">Ваша корзина пуста</p>
            <p class="titleName text-sm">
              Перейдите на страницу магазина и начните покупки сейчас
            </p>
            <p class="titleName text-sm">Желаем приятных покупок!</p>
            <button-fill-vue color="#D52C55" to="/shop">
              <span @click="open = false" class="py-2 self-start"
                >Перейти в каталог</span
              >
            </button-fill-vue>
          </div>
          <!-- empty component end -->

          <div v-else class="flex flex-col gap-3 px-4">
            <BasketCard
              v-for="(item, index) in store.products"
              :key="index"
              :item="item"
            />
          </div>
        </div>
        <div
          class="menu w-full bg-white text-primaryBlue rounded-t-xl px-8 py-8 space-y-6 h-[1/3]"
        >
          <div class="flex justify-between items-center font-bold">
            <p>{{ $t("all") }}</p>
            <p>{{ numberWithSpaces(store.allSum) }} сум</p>
          </div>
          <div class="flex justify-between items-center">
            <ButtonFillVue to="/basket"
              ><span class="py-2">Оформить заказ</span></ButtonFillVue
            >
            <button
              @click="open = false"
              class="underline p-2 hover:no-underline"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SearchIcon from "../../assets/img/magazin/search-normal.svg";
import ButtonFillVue from "../buttons/ButtonFill.vue";
import numberWithSpaces from "../../helpers/numberFormat";
import { useBasketStore } from "../../store/basketProducts";
import InputCount from "./InputCount.vue";
import BasketCard from "../card/BasketCard.vue";
import { useCategoryProduct } from "../../store/categoryProduct";
import axios from "axios";
const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const productStore = useCategoryProduct();

const store = useBasketStore();

const selectRef = ref("all");
const search = ref(route.query.search);

const searchFrom = () => {
  if (!search.value) return;
  router.push({ path: "/shop/category", query: { search: search.value } });
  productStore.getProducts(search.value);
};

const open = ref(false);

const isSaved = ref(false);
const savedFunc = () => {
  isSaved.value = !isSaved.value;
};
</script>
