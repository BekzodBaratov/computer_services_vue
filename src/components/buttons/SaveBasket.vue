<template>
  <div :class="{save:isClick}" class="duration-300 text-[#002E69] hover:text-white border-[#002E69]  hover:bg-[#002E69]  bg-white border py-2 px-4 rounded-lg flex items-center justify-center cursor-pointer">
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props{
    isClick : boolean
}
defineProps<Props>()
</script>

<style scoped>
  .save{
      background-color:#002E69;
      color:white
  }
</style>