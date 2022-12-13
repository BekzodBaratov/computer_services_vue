<template>
  <div class="py-2">
    <span class="capitalize" v-for="(val, index) in props.route" :key="index">
      <span class="text-[#4F87D3CC]" v-if="val.link">
        <RouterLink exact :to="val.link"
          >{{ val.name }}
          <span class="inline-block w-2 mx-1 h-[1px] text-center align-middle bg-[#4F87D3CC] rounded-full"></span>
        </RouterLink>
      </span>
      <span v-else class="text-[#4F87D3CC]">
        {{ val.name }}
      </span>
    </span>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  route: { required: true },
});
</script>
