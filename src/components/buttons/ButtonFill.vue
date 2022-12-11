<template>
  <RouterLink
    :to="to ? to : ''"
    class="text-[#F4F6F9] duration-300 hover:bg-transparent border px-4 rounded-lg flex items-center justify-center cursor-pointer"
    v-bind:style="{ backgroundColor: color || '#002E69', border: color || '#002E69' }"
    :class="'hover:text-[' + color + ']'"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ to: String, color: String });
</script>
