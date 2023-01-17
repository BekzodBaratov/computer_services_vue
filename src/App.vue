<template>
  <HeaderVue />
  <RouterView />
  <!-- <Example /> -->
  <FooterVue />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/header/Header.vue";
import FooterVue from "./components/footer/Footer.vue";
// import Example from "./view/Example.vue";
</script>
