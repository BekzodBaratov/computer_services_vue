<template>
  <HeaderVue />
  <GoogleLogin :callback="callback" />
  <RouterView />
  <FooterVue />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";

const callback = (response) => {
  console.log("hi");
  console.log("Handle the response", response);
};
</script>
