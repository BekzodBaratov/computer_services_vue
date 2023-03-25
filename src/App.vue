<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
  <Loading v-if="loading" />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";
import Loading from "./components/modals/LoadingModal.vue";
import { useLoadingStore } from "./store/loading";
import { storeToRefs } from "pinia";

const store = useLoadingStore();
const { loading } = storeToRefs(store);

// Amount();
</script>
