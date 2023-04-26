<template>
  <div class="rangeSliderComp">
    <div class="titleName">Цена</div>
    <div class="flex items-center text-sm text-gray-500 mb-5 font-bold">
      <span class="border border-whiteBlue text-primary w-20 py-[2px] rounded-md text-center">
        {{ rangeInput[0] }}
      </span>
      <span class="px-2"
        ><svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="10.5" y2="0.5" stroke="#AECBF4" stroke-linecap="round" />
        </svg>
      </span>
      <span class="border border-whiteBlue text-primary w-20 py-[2px] rounded-md text-center">
        {{ rangeInput[1] }}
      </span>
    </div>
    <div class="rangeInp w-60 md:w-40 lg:w-60">
      <div class="slider">
        <div
          class="progress"
          :style="{
            left: rangeMinVal[0] + '%',
            right: rangeMinVal[1] + '%',
          }"
        ></div>
      </div>
      <div class="range-input">
        <input
          type="range"
          id="range-min"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          step="100"
          v-model.number="rangeInput[0]"
          @input="setChangeSlider"
        />
        <input
          type="range"
          class="range-max"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          step="100"
          v-model.number="rangeInput[1]"
          @input="setChangeSlider"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useCategoryProduct } from "../../store/categoryProduct";
const store = useCategoryProduct();

let rangeInput = ref([0, store.maxPrice]); // 0 uzs dan 10000 gacha
let priceMinMax = ref({ min: 0, max: store.maxPrice }); // uzgarmas qiymatlar. input bosh va oxirgi qiymatlari
let rangeMinVal = ref([0, 0]); // left:0% Right:0%
let priceTMP = ref(0);

watch(
  () => store.maxPrice,
  (res) => {
    rangeInput.value[1] = res; // 0 uzs dan 10000 gacha
    priceMinMax.value.max = res; // uzgarmas qiymatlar. input bosh va oxirgi qiymatlari
  }
);

const emit = defineEmits(["rangeInp"]);

function setChangeSlider() {
  if (rangeInput.value[0] > rangeInput.value[1]) {
    priceTMP.value = rangeInput.value[1];
    rangeInput.value[1] = rangeInput.value[0];
    rangeInput.value[0] = priceTMP.value;
  }

  rangeMinVal.value[0] = (rangeInput.value[0] / priceMinMax.value.max) * 100;
  rangeMinVal.value[1] = 100 - (rangeInput.value[1] / priceMinMax.value.max) * 100;

  emit("rangeInp", rangeInput.value);
}
</script>

<style scoped>
.titleName {
  color: #4f87d3cc;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.3rem;
}
.slider {
  height: 5px;
  position: relative;
  background: #002e6980;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background: #002e69;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #aecbf4;
  border: 1px solid #002e69;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
