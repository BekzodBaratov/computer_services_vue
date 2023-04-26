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
import {onMounted} from "vue";

const store = useLoadingStore();
const { loading } = storeToRefs(store);

// Amount();

onMounted(() =>{
    localStorage.removeItem('ProductDetail')
    localStorage.removeItem('mainProducts')
    localStorage.removeItem('loadingStore')
    localStorage.removeItem('servis')
})
</script>
