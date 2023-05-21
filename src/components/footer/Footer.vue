<template>
  <footer id="footer" class="absolute w-full bottom-0">
    <div class="w-[95%] mx-auto">
      <div
        class="px-4 bg-[#444444BF] drop-shadow-lg rounded-t-2xl py-3 gap-4 flex flex-wrap flex-col md:flex-row justify-between items-center shadow-lg text-white"
      >
        <div class="flex gap-3 items-center flex-wrap">
          <span>{{ t("footer.social") }}:</span>
          <div class="flex gap-2 flex-wrap">
            <a target="_blank" class="inline-block" href="http://t.me/STAR_NEW_TECH">
              <img :src="icon1" alt="icon" class="duration-200 hover:-translate-y-1 w-6 h-6" />
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100088042748728&mibextid=ZbWKwL">
              <img :src="icon2" alt="icon" class="duration-200 hover:-translate-y-1 w-6 h-6" />
            </a>
            <a target="_blank" href="https://www.youtube.com/@Star_New_Tech">
              <img :src="icon3" alt="icon" class="duration-200 hover:-translate-y-1 w-6 h-6" />
            </a>
            <a target="_blank" href="https://instagram.com/starnewtech?igshid=ZDdkNTZiNTM">
              <img :src="icon4" alt="icon" class="duration-200 hover:-translate-y-1 w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="SearchForm hidden xs:block">
          <form>
            <div class="SearchForm flex items-center p-0 border border-[#F4F6F940] rounded-3xl overflow-hidden">
              <input
                type="text"
                class="searchInp pl-3 py-[2px] outline-none bg-transparent"
                placeholder="Ваш номер"
                value="+998 (98) 1801808"
                disabled
              />
              <input
                type="text"
                class="searchInp px-0 py-[2px] outline-none bg-transparent"
                placeholder="Ваш номер"
                value="+998 (71) 2250015"
                disabled
              />
              <a
                href="tel:+998981801808"
                class="all px-6 py-[2px] rounded-l-2xl text-primary font-semibold cursor-pointer bg-whiteBlue"
              >
                {{ t("footer.call") }}
              </a>
            </div>
          </form>
        </div>
        <!--          responsive qismi-->

        <div class="SearchForm block xs:hidden">
          <form>
            <div class="SearchForm flex items-center p-0 border border-[#F4F6F940] rounded-3xl overflow-hidden">
              <input
                type="text"
                class="searchInp pl-3 py-[2px] outline-none bg-transparent"
                placeholder="Ваш номер"
                value="+998 (98) 1801808"
                disabled
              />
              <a
                href="tel:+998981801808"
                class="all px-6 py-[2px] rounded-l-2xl text-primary font-semibold cursor-pointer bg-whiteBlue"
              >
                {{ t("footer.call") }}
              </a>
            </div>
          </form>
          <form class="mt-4">
            <div class="SearchForm flex items-center p-0 border border-[#F4F6F940] rounded-3xl overflow-hidden">
              <input
                type="text"
                class="searchInp pl-3 py-[2px] outline-none bg-transparent"
                placeholder="Ваш номер"
                value="+998 (71) 2250015"
                disabled
              />
              <a
                href="tel:+9989712250015"
                class="all px-6 py-[2px] rounded-l-2xl text-primary font-semibold cursor-pointer bg-whiteBlue"
              >
                {{ t("footer.call") }}
              </a>
            </div>
          </form>
        </div>

        <div class="text-[#F4F6F9] text-lg font-light">2023. All rights reserved.</div>
      </div>
    </div>
  </footer>
  <div class="h-36 md:h-24 lg:h-16"></div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import icon1 from "../../assets/img/footer/icon1.png";
import icon2 from "../../assets/img/footer/icon2.png";
import icon3 from "../../assets/img/footer/icon3.png";
import icon4 from "../../assets/img/footer/icon4.png";
const { t } = useI18n();
</script>
