<template>
  <form action="filter">
    <div class="space-y-8 mt-4 mb-8">
      <Range @rangeInp="rangeInp" />

      <div>
        <p class="titleName">Category</p>
        <select
          id="countries"
          class="bg-transparent border border-whiteBlue outline-none text-primary rounded-lg px-2 py-1"
        >
          <option value="all" selected>Каталог</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <!-- <div>
        <p class="titleName">Цвет</p>
        <select
          id="countries"
          class="bg-whiteBlue border-x-4 border-x-whiteBlue outline-none text-primary rounded-lg px-2 py-1"
        >
          <option value="all" selected>Каталог</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div> -->

      <!-- <div class="space-y-1">
        <div class="space-x-2 text-primary">
          <input type="radio" name="pul" id="naqt" />
          <label for="naqt">В наличии</label>
        </div>
        <div class="space-x-2 text-primary">
          <input type="radio" name="pul" id="aksiya" />
          <label for="aksiya">Акция</label>
        </div>
      </div> -->

      <span class="flex md:flex-col items-start gap-3">
        <span @click="handleFilter">
          <ButtonFillVue><span class="py-2">Применить</span></ButtonFillVue>
        </span>
        <span @click="handleReset">
          <ButtonStrokeVue
            ><span class="py-2">Сбросить все</span>
          </ButtonStrokeVue>
        </span>
      </span>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Range from "./Range.vue";
import ButtonStrokeVue from "../buttons/ButtonStroke.vue";
import ButtonFillVue from "../buttons/ButtonFill.vue";
import { useCategoryProduct } from "../../store/categoryProduct";
import { useLoadingStore } from "../../store/loading";
import axios from "axios";
const store = useCategoryProduct();
const loading = useLoadingStore();

const data = ref({
  range: [0, 1],
  model: "",
  color: "",
  typeMoney: "",
});

async function rangeInp(rangeMinMaxArr) {
  data.value.range = rangeMinMaxArr;
  console.log(rangeMinMaxArr);
}

const handleFilter = async () => {
  loading.loading = true;
  console.log(data.value.range);
  try {
    const res = await axios.get(
      `/products/search?search=cat&minPrice=${data.value.range[0]}&maxPrice=${data.value.range[1]}`
    );
    console.log(res);
    console.log(res.data.data.results);
    store.products = res.data.data.results;
  } catch (error) {
    console.log(error.message);
  } finally {
    loading.loading = false;
  }
};
const handleReset = () => {
  data.value = {
    range: [0, 1],
    model: "",
    color: "",
    typeMoney: "",
  };
};
</script>
