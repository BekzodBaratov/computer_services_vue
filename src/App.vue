<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";
</script>
