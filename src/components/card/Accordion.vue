<template>
  <div class="accordion-card group" @click="clickCard()">
    <div
      class="rounded-12 w-full transition-all duration-300 cursor-pointer bg-white py-4 sm:py-[25px] px-4 sm:px-8 text-[#25385B] border border-solid border-[#8aa1bc14] mb-6 rounded-xl shadow-card relative"
    >
      <div class="flex items-center">
        <div class="flex items-center">
          <div class="">
            <span
              class="absolute top-[15px] sm:top-[24px] left-[10px] sm:left-[22px] text-base md:text-base lg:text-xl text-[#18182F] group-hover:text-[#35ABB2] font-bold leading-6 flex-shrink-0 fa-solid fa-plus icon-anim"
              :class="active === number ? 'opacity-0' : 'opacity-1'"
            >
            </span>
            <span
              class="absolute top-[15px] sm:top-[24px] left-[10px] sm:left-[22px] text-base md:text-base lg:text-xl text-[#35ABB2] font-bold leading-6 flex-shrink-0 icon-anim fa-solid fa-minus"
              :class="active === number ? 'opacity-1' : 'opacity-0'"
            ></span>
          </div>
          <span
            class="ml-4 sm:ml-6 text-sm font-semibold leading-5 sm:leading-140 sm:text-base text-[#22232C] group-hover:text-[#35ABB2]"
            >{{ question }}</span
          >
        </div>
      </div>
      <transition mode="out-in" name="accordion">
        <div v-if="active === number" class="max-h-[100vh]">
          <p
            class="text-[#18182F] sm:text-base text-[12px] pt-3 sm:pt-5 pl-[16px] sm:pl-[24px] font-normal leading-5 md:leading-140"
          >
            {{ answer }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const card = ref(false);

export interface Props {
  number: number;
  question: string;
  answer: string;
  active: number;
}
interface Emits {
  (e: "click", value: number): void;
}

const emit = defineEmits<Emits>();

const clickCard = () => {
  card.value = !card.value;
  emit("click", props.number);
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.icon-anim {
  transition: all 0.5s;
}

.accordion-enter-from,
.accordion-leave-to {
  transition: all 0.6s;
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  height: 100%;
  transition: all 0.9s;
}

.shadow-card {
  box-shadow: 0px 4px 40px rgba(15, 36, 66, 0.04);
}
</style>
