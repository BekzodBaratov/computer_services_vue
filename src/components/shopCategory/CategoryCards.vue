<template>
  <form action="filter space-y-1">
    <div class="rangeSliderComp my-6">
      <div class="titleName">Цена</div>
      <div class="flex items-center text-sm text-gray-500 mb-5 font-bold">
        <span class="border border-[#AECBF4] text-[#002E69] w-20 py-[2px] rounded-md text-center">
          {{ rangeInput[0] }}
        </span>
        <span class="px-2"
          ><svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="10.5" y2="0.5" stroke="#AECBF4" stroke-linecap="round" />
          </svg>
        </span>
        <span class="border border-[#AECBF4] text-[#002E69] w-20 py-[2px] rounded-md text-center">
          {{ rangeInput[1] }}
        </span>
      </div>
      <div class="rangeInp w-72">
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
    <div>
      <p class="titleName">Модель</p>
      <select
        id="countries"
        class="bg-transparent border border-[#AECBF4] outline-none flex justify-center text-[#002E69] rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
      >
        <option value="all" selected>Каталог</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div>
      <p class="titleName">Цвет</p>
      <select
        id="countries"
        class="bg-[#AECBF4] select outline-none flex justify-center text-[#002E69] rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
      >
        <option value="all" selected>Каталог</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
    <div class="space-y-1 mt-3">
      <div class="space-x-2 text-[#002E69]">
        <input type="radio" name="pul" id="naqt" />
        <label for="naqt">В наличии</label>
      </div>
      <div class="space-x-2 text-[#002E69]">
        <input type="radio" name="pul" id="aksiya" />
        <label for="aksiya">Акция</label>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from "vue";

const rangeInput = reactive([0, 10000]); // 0 uzs dan 10000 gacha
const priceMinMax = reactive({ min: 0, max: 10000 }); // uzgarmas qiymatlar. input bosh va oxirgi qiymatlari
const rangeMinVal = reactive([0, 0]); // left:0% Right:0%
const priceTMP = ref(0);

const setChangeSlider = () => {
  if (rangeInput[0] > rangeInput[1]) {
    priceTMP.value = rangeInput[1];
    rangeInput[1] = rangeInput[0];
    rangeInput[0] = priceTMP.value;
  }

  rangeMinVal[0] = (rangeInput[0] / priceMinMax.max) * 100;
  rangeMinVal[1] = 100 - (rangeInput[1] / priceMinMax.max) * 100;
};
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
