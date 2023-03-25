<template>
  <div>
    <form>
      <span class="flex gap-2">
        <button @click.prevent="countFunc(false)" class="text-primary">
          <svg
            width="11"
            height="3"
            viewBox="0 0 11 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.12 2.104H10.136V0.296H0.12V2.104Z" fill="#002E69" />
          </svg>
        </button>
        <input
          :value="count"
          maxlength="5"
          minlength="0"
          class="border w-10 my-1 py-[2px] text-sm border-whiteBlue rounded-lg text-primary text-center"
          type="number"
          id="countProd"
        />
        <button @click.prevent="countFunc(true)">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0400001 5.768H8.456V3.768H0.0400001V5.768ZM3.176 0.552V8.984H5.32V0.552H3.176Z"
              fill="#002E69"
            />
          </svg>
        </button>
      </span>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});

const count = ref(props.modelValue);
const emit = defineEmits(["on-change"]);

const countFunc = (val) => {
  if (val) {
    count.value++;
  } else if (count.value > 1) {
    count.value--;
  }
  emit("update:modelValue", count.value);
};
</script>
