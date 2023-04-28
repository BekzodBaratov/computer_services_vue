<template>
  <div class="w-[95%] fixed z-[999] top-0 left-1/2 -translate-x-1/2 backdrop-blur-sm">
    <div class="px-4 bg-[#444444BF] drop-shadow-lg rounded-b-2xl flex justify-between items-center shadow-lg">
      <span @click="isOpenSidebar = true" class="md:hidden text-white">
        <i class="fa-solid fa-bars p-3 text-xl"></i>
      </span>
      <RouterLink
        to="/"
        class="flex items-center gap-1 group"
        :class="router.currentRoute.value.path === '/' ? 'text-primary' : 'text-white'"
      >
        <span class="">
          <svg class="w-10 h-14" viewBox="0 0 61 50" fill="none">
            <g clip-path="url(#clip0_342_31958)">
              <path
                d="M28.2699 32.8354C27.9588 32.3941 27.6171 31.9752 27.2472 31.5818C27.147 31.4749 27.0445 31.3693 26.9402 31.2665C26.3961 30.7287 25.8012 30.2447 25.1639 29.8211C24.6845 29.5021 24.1828 29.2178 23.6626 28.9704L23.1163 28.0608L23.0847 28.0078L23.0532 28.0608L22.7425 28.5789C22.1703 28.3621 21.5824 28.189 20.984 28.0608C20.9195 28.0466 20.855 28.0329 20.79 28.0201L21.8223 26.3001L21.9413 26.1018L22.8793 24.5394L23.0852 24.1963L23.2911 24.5394L24.2291 26.1018L24.3481 26.3001L25.4046 28.0608L26.4616 29.8215L27.1342 30.9454L27.5176 31.585L28.2699 32.8354Z"
                fill="white"
              />
              <path
                d="M35.1544 29.6877L36.2109 31.5151L37.2674 33.3425H35.4372L34.3807 31.5151L33.3241 29.6877H30.6799V33.3425H28.8496V27.8845L28.8638 27.8598H34.7559C34.9986 27.8598 35.2313 27.7635 35.4029 27.5922C35.5746 27.4208 35.671 27.1884 35.671 26.9461C35.671 26.7038 35.5746 26.4714 35.4029 26.3C35.2313 26.1287 34.9986 26.0324 34.7559 26.0324H29.9203L30.5655 24.9149L30.6799 24.7176L30.9773 24.2036H34.7559C35.4511 24.2031 36.1207 24.4659 36.6294 24.9391C37.1381 25.4123 37.4481 26.0606 37.4967 26.7531C37.5453 27.4456 37.329 28.1307 36.8913 28.6701C36.4537 29.2095 35.8274 29.5631 35.1388 29.6594"
                fill="white"
              />
              <path
                d="M6.40109 27.8603C6.43266 27.8603 6.46423 27.8603 6.49534 27.8603C6.66478 27.8655 6.83332 27.8869 6.99867 27.9243C7.57918 28.0532 8.10197 28.3671 8.48822 28.8186C8.87448 29.2701 9.10326 29.8347 9.14007 30.4274C9.14373 30.4845 9.14556 30.5416 9.14556 30.5996C9.14556 31.3266 8.85631 32.0238 8.34145 32.5378C7.82659 33.0519 7.12829 33.3407 6.40017 33.3407H6.3718C6.24277 33.3407 6.15629 33.3407 6.03641 33.3407H0.483398L1.54037 31.5133H6.40109C6.64379 31.5133 6.87656 31.417 7.04818 31.2457C7.2198 31.0743 7.31622 30.8419 7.31622 30.5996C7.31622 30.3573 7.2198 30.1249 7.04818 29.9535C6.87656 29.7821 6.64379 29.6859 6.40109 29.6859H3.90598C3.87441 29.6859 3.84284 29.6859 3.81173 29.6836C3.44241 29.6718 3.07936 29.585 2.74468 29.4287C2.24427 29.1947 1.82592 28.8159 1.54403 28.3414C1.33973 27.9962 1.21361 27.6105 1.17456 27.2115C1.13551 26.8124 1.18447 26.4097 1.318 26.0315C1.50727 25.497 1.85788 25.0342 2.32154 24.707C2.78519 24.3797 3.33908 24.204 3.9069 24.2041H9.15105L8.09408 26.0315H3.90598C3.68403 26.0317 3.46972 26.1125 3.30296 26.2588C3.13621 26.405 3.02838 26.6068 2.99956 26.8266C2.97073 27.0463 3.02287 27.269 3.14628 27.4532C3.26968 27.6374 3.45593 27.7706 3.67034 27.8279"
                fill="white"
              />
              <path
                d="M16.3129 27.8599V33.3421H14.4827V26.0325H10.2021L11.2587 24.2051H19.8609L18.8039 26.0325H16.3148V27.7471"
                fill="white"
              />
              <path
                d="M22.0881 29.6659L21.9966 29.8198L20.94 31.5806L19.8835 33.3413H17.5957L18.6522 31.5806L19.7087 29.8198L20.2711 28.8833C20.8971 29.0944 21.5047 29.3561 22.0881 29.6659Z"
                fill="white"
              />
              <path
                d="M15.3174 28.2686C17.4157 28.1163 19.5182 28.503 21.4245 29.3918C23.3308 30.2806 24.9774 31.6419 26.2074 33.3461H28.6128C28.0908 32.4845 26.4088 29.9595 23.0612 28.5994C19.4355 27.1265 16.2371 27.9881 15.3197 28.2709"
                fill="#AC8600"
              />
              <path
                d="M60.241 19.1797L43.7151 30.8194L40.4609 29.7947V29.7892L51.718 21.8632L60.241 19.1797Z"
                fill="#EDB600"
              />
              <path
                d="M60.2418 19.1798L51.7187 21.8634L51.7297 21.8579H37.8105V21.8524L39.8197 19.1748L60.2418 19.1798Z"
                fill="#AC8600"
              />
              <path
                d="M43.7151 30.8196L50.0245 49.6667L44.7611 42.6366L40.4609 29.7949L43.7151 30.8196Z"
                fill="#AC8600"
              />
              <path d="M44.7619 42.6366L50.0253 49.6667L33.5049 38.0215V34.6997" fill="#EDB600" />
              <path
                d="M33.5159 0.333496L39.8197 19.175L37.8106 21.8526L33.5104 9.01644L33.5049 9.03243V0.365933L33.5159 0.333496Z"
                fill="#EDB600"
              />
              <path
                d="M33.5041 34.6997V38.0215L33.4986 38.016L16.9668 49.6557V49.6502L22.2302 42.6311L31.8715 35.8428L33.5041 34.6997Z"
                fill="#AC8600"
              />
              <path d="M33.5047 0.365723V9.03222L29.2045 21.8524L27.1953 19.1693L33.5047 0.365723Z" fill="#AC8600" />
              <path
                d="M27.1952 19.1695L29.2044 21.8526L15.2793 21.8472L15.2903 21.8526L6.76172 19.1641L27.1952 19.1695Z"
                fill="#EDB600"
              />
              <path d="M23.4729 38.9238L22.2302 42.6312L16.9668 49.6503L20.5523 38.9238" fill="#EDB600" />
              <path
                d="M3.15237 34.6218V37.2862L2.67559 36.9207L0.960181 35.5999V37.2862H0.483398V34.6296L0.960181 34.995L2.67559 36.3163V34.6177L3.15237 34.6218Z"
                fill="white"
              />
              <path
                d="M3.97267 35.3372V35.5848H5.68853V36.0622H3.97267V36.5648C3.97314 36.6292 3.99899 36.6909 4.04463 36.7364C4.09026 36.782 4.15201 36.8078 4.21655 36.8083H6.16486V37.2843H4.21655C4.02602 37.2836 3.84356 37.2074 3.70922 37.0725C3.57488 36.9376 3.49964 36.755 3.5 36.5648V35.3372C3.49964 35.147 3.57488 34.9644 3.70922 34.8295C3.84356 34.6946 4.02602 34.6184 4.21655 34.6177H6.16486V35.0937H4.21655C4.15201 35.0942 4.09026 35.12 4.04463 35.1656C3.99899 35.2111 3.97314 35.2728 3.97267 35.3372Z"
                fill="white"
              />
              <path
                d="M9.22987 36.7077L9.05828 37.2824L8.70778 36.7931L8.17747 36.0662L7.65172 36.7931L7.30077 37.2769L7.12919 36.7058L6.50781 34.6157H7.00335L7.4838 36.2225L7.88737 35.6647L7.96378 35.5582L8.18113 35.2613L8.39847 35.5582L8.47443 35.6647L8.87891 36.2243L9.3589 34.6175H9.8549L9.22987 36.7077Z"
                fill="white"
              />
              <path
                d="M14.6815 34.6216V35.0972H13.5874V37.2859H13.1106V35.0972H12.0166V34.6216H14.6815Z"
                fill="white"
              />
              <path
                d="M15.5049 35.3372V35.5848H17.2212V36.0622H15.5049V36.5648C15.5054 36.6292 15.5312 36.6909 15.5769 36.7364C15.6225 36.782 15.6842 36.8078 15.7488 36.8083H17.6971V37.2843H15.7488C15.5582 37.2836 15.3758 37.2074 15.2414 37.0725C15.1071 36.9376 15.0319 36.755 15.0322 36.5648V35.3372C15.0319 35.147 15.1071 34.9644 15.2414 34.8295C15.3758 34.6946 15.5582 34.6184 15.7488 34.6177H17.6971V35.0937H15.7488C15.6842 35.0942 15.6225 35.12 15.5769 35.1656C15.5312 35.2111 15.5054 35.2728 15.5049 35.3372Z"
                fill="white"
              />
              <path
                d="M18.2691 35.9501C18.2694 36.1771 18.36 36.3947 18.5208 36.5552C18.6816 36.7157 18.8996 36.806 19.127 36.8062H20.4613V37.2822H19.127C18.9497 37.2855 18.7735 37.2535 18.6087 37.188C18.4439 37.1225 18.2939 37.0249 18.1673 36.9008C18.0407 36.7768 17.9402 36.6288 17.8716 36.4655C17.8029 36.3022 17.7676 36.1269 17.7676 35.9498C17.7676 35.7727 17.8029 35.5974 17.8716 35.4342C17.9402 35.2709 18.0407 35.1229 18.1673 34.9988C18.2939 34.8748 18.4439 34.7772 18.6087 34.7117C18.7735 34.6462 18.9497 34.6141 19.127 34.6174H20.4613V35.0935H19.127C18.8995 35.0937 18.6815 35.184 18.5206 35.3446C18.3598 35.5052 18.2693 35.7229 18.2691 35.9501Z"
                fill="white"
              />
              <path
                d="M23.4732 34.6177V37.2825H22.9969V36.0622H21.281V37.2843H20.8047V34.6177H21.281V35.5848H22.9969V34.6177H23.4732Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_342_31958">
                <rect width="60.6383" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span class="uppercase font-normal text-lg md:text-xl duration-200 group-hover:text-primary">
          starnewtech.uz
        </span>
      </RouterLink>

      <ul class="hidden md:flex gap-6 [&>li]:inline-block [&>li]:py-3">
        <li
          v-for="(val, i) in routeNav"
          :key="i"
          class="relative before:duration-300 before:absolute before:bottom-0 before:opacity-0 hover:before:opacity-100 hover:before:bottom-3 before:left-1/2 hover:before:left-0 hover:before: before:w-2 hover:before:w-full before:h-[1px] before:bg-white"
          :class="router.currentRoute.value.path === val.link ? 'text-primary' : 'text-[#F4F6F9]'"
        >
          <RouterLink class="capitalize" :to="val.link">{{ $t(val.name) }}</RouterLink>
        </li>
      </ul>

      <div class="text-[#F4F6F9] flex items-center gap-1">
        <LangCompVue />

        <span class="hidden md:inline">
          <svg class="w-[1px] h-7" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.499999" y2="29.5" stroke="#F4F6F9" stroke-linecap="round" />
          </svg>
        </span>

        <div class="hidden md:flex items-center gap-2" v-if="!store.isRegisteration">
          <span @click="isRegisterationModal = true" class="duration-200 cursor-pointer hover:text-primary"
            >{{ $t('register') }}</span
          >
          <span
            @click="isLoginModal = true"
            class="flex items-center gap-1 cursor-pointer border px-3 py-1 rounded-xl duration-200 border-[#F4F6F9] hover:bg-[#F4F6F9] hover:text-primary group"
          >
            <span>
              <svg
                class="w-6 h-6 stroke-[#F4F6F9] group-hover:stroke-primary"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 4.0102H26.425C27.5808 3.95868 28.7099 4.36705 29.5654 5.14597C30.4208 5.92488 30.9329 7.01091 30.9896 8.16645V26.8331C30.9329 27.9887 30.4208 29.0747 29.5654 29.8536C28.7099 30.6325 27.5808 31.0409 26.425 30.9894H17.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M4.00977 17.5H21.8743" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M21.8743 17.4998L16.041 11.6665"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8743 17.5L16.041 23.3333"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{$t('exit')}}
          </span>
        </div>

        <div class="hidden md:flex items-center gap-2" v-if="store.isRegisteration">
          <RouterLink class="flex items-center gap-1 px-3 py-1 group" to="/profile">
            <span>
              <svg class="w-6 h-6 fill-white group-hover:fill-primary duration-200" viewBox="0 0 35 35" fill="none">
                <path
                  d="M17.4997 18.5936C12.8768 18.5936 9.11426 14.8311 9.11426 10.2082C9.11426 5.58525 12.8768 1.82275 17.4997 1.82275C22.1226 1.82275 25.8851 5.58525 25.8851 10.2082C25.8851 14.8311 22.1226 18.5936 17.4997 18.5936ZM17.4997 4.01025C14.0872 4.01025 11.3018 6.79567 11.3018 10.2082C11.3018 13.6207 14.0872 16.4061 17.4997 16.4061C20.9122 16.4061 23.6976 13.6207 23.6976 10.2082C23.6976 6.79567 20.9122 4.01025 17.4997 4.01025Z"
                />
                <path
                  d="M30.0268 33.1771C29.4289 33.1771 28.9331 32.6812 28.9331 32.0833C28.9331 27.0521 23.7997 22.9687 17.4997 22.9687C11.1997 22.9687 6.06641 27.0521 6.06641 32.0833C6.06641 32.6812 5.57057 33.1771 4.97266 33.1771C4.37474 33.1771 3.87891 32.6812 3.87891 32.0833C3.87891 25.8562 9.98932 20.7812 17.4997 20.7812C25.0101 20.7812 31.1206 25.8562 31.1206 32.0833C31.1206 32.6812 30.6247 33.1771 30.0268 33.1771Z"
                />
              </svg>
            </span>
            <p class="duration-200 group-hover:text-primary">
              {{ store.user?.username }}
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="h-16"></div>

  <RegisterModalVue @closeRegiterModal="isRegisterationModal = false" v-if="isRegisterationModal" />
  <LoginModalVue @changeTo="changeLoginToRegister" @closeLoginModal="isLoginModal = false" v-if="isLoginModal" />
  <SideBar @openSidebar="openSidebar" :isOpenSidebar="isOpenSidebar" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserRegister } from "../../store/UserRegister";
import { useI18n } from "vue-i18n";
import RegisterModalVue from "../modals/RegisterModal.vue";
import LoginModalVue from "../modals/LoginModal.vue";
import LangCompVue from "./LangComp.vue";
import SideBar from "../sideBar/SideBar.vue";

const store = useUserRegister();
const router = useRouter();
const { t } = useI18n();

const routeNav = ref([
  { name: ("header.service"), link: "/services" },
  { name: ("header.magazin"), link: "/shop" },
  { name: ("header.fix"), link: "/configurator" },
  { name: ("header.about"), link: "/about" },
  { name: ("header.contact"), link: "/contact" },
]);

const isLoginModal = ref(false);
const isRegisterationModal = ref(false);
const isOpenSidebar = ref(false);

const changeLoginToRegister = () => {
  isRegisterationModal.value = true;
  isLoginModal.value = false;
};

function openSidebar() {
  isOpenSidebar.value = false;
}
</script>
