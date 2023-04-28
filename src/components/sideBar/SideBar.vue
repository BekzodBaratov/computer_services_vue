<template>
  <Teleport to="body">
    <div
      v-if="isOpenSidebar"
      @click="emit('openSidebar')"
      class="fixed z-[999999] inset-0 bg-[#0006] backdrop-blur-sm"
    ></div>
    <div
      :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'"
      class="fixed z-[999999] duration-200 inset-y-0 left-0 w-2/3 bg-blue100"
    >
      <div class="relative h-full px-8 py-8">
        <div class="">
          <!-- if has been user -->
          <RouterLink
            v-if="store.isRegisteration"
            @click="emit('openSidebar')"
            to="/profile"
            class="border rounded-lg block border-gray-700 mb-8 hover:bg-[#d8e0ef] active:bg-[#d8e0ef] duration-200"
          >
            <div class="flex items-center py-3 px-3 gap-3">
              <div v-if="store.user?.img">
                <img
                  class="h-20 aspect-square rounded-full object-cover object-center"
                  :src="store.user.img"
                  alt="profile_image"
                />
              </div>
              <div
                v-else
                class="h-20 aspect-square rounded-full object-cover object-center bg-gray-300 flex items-center justify-center"
              >
                <i class="fa-solid fa-user text-4xl text-gray-500"></i>
              </div>
              <div>
                <p class="text-lg font-semibold">{{ store.user.username }}</p>
                <p class="email">{{ store.user.email }}</p>
              </div>
            </div>
          </RouterLink>

          <!-- if has not been user -->
          <div
            @click="handleProfile"
            v-else
            class="border rounded-lg block border-gray-700 mb-8 hover:bg-[#d8e0ef] active:bg-[#d8e0ef] duration-200"
          >
            <div class="flex items-center py-3 px-3 gap-3">
              <div
                class="h-20 aspect-square rounded-full object-cover object-center bg-gray-300 flex items-center justify-center"
              >
                <i class="fa-solid fa-user text-4xl text-gray-500"></i>
              </div>
              <p class="text-lg font-semibold text-gray-600">Not user</p>
            </div>
          </div>

          <!-- navigation bar -->
          <ul class="text-2xl text-gray-600 font-semibold capitalize space-y-6">
            <li
              class="hover:bg-gray-200 active:bg-gray-200 duration-200 rounded-md"
              v-for="item in routeNav"
              :key="item.id"
            >
              <RouterLink @click="emit('openSidebar')" class="inline-block px-8 py-3" :to="item.link">
                <i :class="item.class"></i>
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- logout -->
        <div
          @click="handleLogout"
          v-if="store.isRegisteration"
          class="absolute bottom-0 left-0 right-0 text-2xl mx-8 px-8 py-3 mb-4 rounded-md duration-200 hover:bg-gray-200 font-semibold text-gray-600"
        >
          <i class="fa-solid fa-right-from-bracket pr-4"></i>
          Logout
        </div>

        <!-- register login -->
        <ul
          v-if="!store.isRegisteration"
          class="absolute bottom-0 mb-4 left-0 right-0 text-2xl mx-8 space-y-2 font-semibold text-gray-600"
        >
          <li @click="handleLogup" class="px-8 py-3 rounded-md duration-200 hover:bg-gray-200">
            <i class="fa-solid fa-arrow-right-to-bracket pr-4"></i>
              {{ $t('register') }}
          </li>
          <li @click="handleLogin" class="px-8 py-3 rounded-md duration-200 hover:bg-gray-200">
            <i class="fa-solid fa-arrow-right-to-bracket pr-4"></i>
              {{ $t('exit') }}
          </li>
        </ul>
      </div>
      <div
        :class="isOpenSidebar ? 'block' : 'hidden'"
        @click="emit('openSidebar')"
        class="absolute bg-blue100 text-2xl text-gray-600 rounded-r-md font-semibold left-full top-10 z-50"
      >
        <div class="p-2 px-3">
          <i class="fas fa-xmark"></i>
        </div>
      </div>
    </div>
  </Teleport>
  <RegisterModal @closeRegiterModal="isRegisterationModal = false" v-if="isRegisterationModal" />
  <LoginModal @changeTo="changeLoginToRegister" @closeLoginModal="isLoginModal = false" v-if="isLoginModal" />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useUserRegister } from "../../store/UserRegister";

import RegisterModal from "../modals/RegisterModal.vue";
import LoginModal from "../modals/LoginModal.vue";

const store = useUserRegister();
const router = useRouter();
const { t } = useI18n();

const isLoginModal = ref(false);
const isRegisterationModal = ref(false);

const changeLoginToRegister = () => {
  isRegisterationModal.value = true;
  isLoginModal.value = false;
};

const emit = defineEmits(["openSidebar"]);
const props = defineProps(["isOpenSidebar"]);

const routeNav = ref([
  { id: 1, name: t("header.service"), link: "/services", class: "fa-solid fa-toolbox pr-4" },
  { id: 2, name: t("header.magazin"), link: "/shop", class: "fa-solid fa-shop pr-4" },
  { id: 3, name: t("header.fix"), link: "/configurator", class: "fa-solid fa-computer pr-4" },
  { id: 4, name: t("header.about"), link: "/about", class: "fa-solid fa-address-card pr-4" },
  { id: 5, name: t("header.contact"), link: "/contact", class: "fa-solid fa-address-book pr-4" },
]);

const handleProfile = () => {
  emit("openSidebar");
  isLoginModal.value = true;
};
const handleLogin = () => {
  emit("openSidebar");
  isLoginModal.value = true;
};
const handleLogup = () => {
  emit("openSidebar");
  isRegisterationModal.value = true;
};
const handleLogout = () => {
  emit("openSidebar");
  logoutApi();
};
const logoutApi = () => {
  axios({
    method: "get",
    url: "users/logout",
    headers: {},
    withCredentials: true,
  })
    .then(function (response) {
      store.user = { name: "" };
      store.token = "";
      router.push("/");
    })
    .catch(function (error) {
      alert(error.message);
    });
};
</script>
