<template>
  <RouterLink
    :to="to ? to : ''"
    :disabled="disabled"
    class="hover:bg-[#002E69] hover:text-[#F4F6F9] duration-300 bg-transparent text-[#002E69] border border-[#002E69] px-4 rounded-lg flex items-center justify-center cursor-pointer"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ to: String, disabled: Boolean });
</script>
