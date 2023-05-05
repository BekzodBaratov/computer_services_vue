<template>
  <div class="flex items-center justify-center pb-8">
    <div
      class="card min-w-[38rem] md:min-w-[44rem] grid grid-cols-1 md:grid-cols-2 shadow-md rounded-sm bg-[#fffa] mx-2 py-12 px-16 md:px-0 gap-12 md:gap-0"
    >
      <div class="left_card bg-danger shadow-md rounded-md py-12 px-8 text-white md:-translate-x-36 space-y-12">
        <h2 class="text-start text-3xl font-semibold">{{ t("contact.contactUs") }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-1 gap-6">
          <div class="flex gap-5 items-center max-w-xs">
            <i class="fa-solid fa-location-dot text-xl"></i>
            <p>{{ t("contact.address") }}</p>
          </div>
          <div class="flex gap-5 items-center">
            <i class="fa-regular fa-envelope text-xl"></i>
            <p>Samariddin@gmail.com</p>
          </div>
          <div class="flex gap-5 items-center">
            <i class="fa-solid fa-phone text-xl"></i>
            <p>+998 (99) 886 26 27</p>
          </div>
          <div class="flex gap-5 items-center">
            <i class="fa-solid fa-fax text-xl"></i>
            <p>+998 (99) 886 26 27</p>
          </div>
        </div>
      </div>

      <div class="right_card md:-translate-x-16 text-primary">
        <h2 class="text-start text-3xl font-semibold pb-1">{{ t("contact.title") }}</h2>
        <p class="pb-8">{{ t("contact.desc") }}</p>
        <form class="flex flex-col gap-6">
          <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
            <div class="mb-4 flex flex-col">
              <input
                class="bg-transparent border min-w-[8rem] md:min-w-[16rem] border-primary rounded-xl py-1 px-3 text-primary outline-none placeholder:text-[#002e6977]"
                type="text"
                v-model="state.name"
                name="name"
                id="name"
                :placeholder="t('contact.name')"
              />
              <span class="text-sm text-end text-red-600" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
            </div>
            <div class="mb-4 flex flex-col">
              <input
                class="bg-transparent border min-w-[8rem] md:min-w-[16rem] border-primary rounded-xl py-1 px-3 text-primary outline-none placeholder:text-[#002e6977]"
                type="email"
                v-model="state.email"
                name="email"
                id="email"
                :placeholder="t('contact.email')"
              />
              <span class="text-sm text-end text-red-600" v-if="v$.email.$error">{{
                v$.email.$errors[0].$message
              }}</span>
            </div>
            <div class="mb-4 flex flex-col col-span-2 md:col-span-1">
              <textarea
                class="bg-transparent border min-w-[16rem] border-primary rounded-xl py-1 px-3 text-primary outline-none placeholder:text-[#002e6977]"
                name=""
                id=""
                cols="30"
                rows="10"
                :placeholder="t('contact.message')"
              ></textarea>
              <span class="text-sm text-end text-red-600" v-if="v$.email.$error">{{
                v$.email.$errors[0].$message
              }}</span>
            </div>
          </div>
          <div class="flex justify-center">
            <button type="submit" @click.prevent="formLoginData">
              <ButtonFillVue>
                <span class="py-1 px-4">{{ t("contact.btn") }}</span>
              </ButtonFillVue>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mx-auto pb-16">
    <iframe
      class="w-full h-[30rem] rounded-md"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.6044344056669!2d69.28713782921224!3d41.36500800522324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38973a1f5165a992!2zNDHCsDIxJzU0LjAiTiA2OcKwMTcnMTUuNyJF!5e0!3m2!1sru!2s!4v1671195081027!5m2!1sru!2s"
      style="border: 0"
      :allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <LoadingModalVue v-if="loading" />
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useI18n } from "vue-i18n";

import ButtonFillVue from "../components/buttons/ButtonFill.vue";
import LoadingModalVue from "../components/modals/LoadingModal.vue";

const loading = ref(false);
const { t } = useI18n();

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3), maxLength: maxLength(255) },
    email: { required, email, maxLength: maxLength(255) },
    comment: { required, minLength: minLength(24), maxLength: maxLength(1024) },
  };
});

const state = reactive({
  name: "",
  email: "",
  comment: "",
});

const v$ = useVuelidate(rules, state);

const formLoginData = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    // fetchApi(state);
  }
};
// const fetchApi = (data) => {
//   axios({
//     method: "post",
//     url: "users/commit",
//     withCredentials: true,
//     data: data,
//   })
//     .then(function (response) {
//       // store.user = response.data.data.user;
//       alert(response.data.message);
//     })
//     .catch(function (error) {
//       alert(error.message + ", Please try again");
//     })
//     .finally(function () {
//       loading.value = false;

//       state.name = "";
//       state.email = "";
//       state.comment = "";
//     });
// };
</script>
