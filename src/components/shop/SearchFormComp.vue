<template>
  <div class="container mx-auto mt-4 flex justify-between items-center">
    <form class="form items-center flex gap-4">
      <div class="selectForm">
        <select
          id="countries"
          class="bg-[#AECBF4] outline-none flex justify-center text-[#002E69] rounded-2xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
        >
          <option selected>Каталог</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div class="SearchForm flex items-center p-0 border border-[#0003] rounded-3xl overflow-hidden">
        <div class="all px-6 py-1 rounded-r-2xl text-[#002E69] font-semibold cursor-pointer bg-[#AECBF4]">Все</div>
        <input type="text" class="searchInp px-3 py-1 outline-none bg-transparent" placeholder="Поиск..." />
        <div class="searchIcon pr-4 cursor-pointer">
          <img :src="SearchIcon" alt="searchIcon" />
        </div>
      </div>
    </form>

    <div class="flex items-end gap-4 h-full">
      <div class="shopcart flex flex-col items-center">
        <img :src="HeartIcon" alt="heart_icon" />
        <div class="text">Избранное</div>
      </div>
      <div class="izbrannoe flex flex-col items-center">
        <img :src="KorzinaIcon" alt="korzina_Icon" />
        <div class="text">Корзина</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchIcon from "../../assets/img/magazin/search-normal.svg";
import KorzinaIcon from "../../assets/img/magazin/shopping-cart.svg";
import HeartIcon from "../../assets/img/magazin/Vector.svg";
</script>
