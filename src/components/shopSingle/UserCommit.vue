<template>
  <!-- <Swiper
    :navigation="true"
    :lazy="true"
    :loop="true"
    :scrollbar="{ draggable: true }"
    :centeredSlides="true"
    :pagination="{ clickable: true }"
    :breakpoints="{
      240: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1536: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    :modules="[Navigation, Lazy, Pagination]"
    class="swiper swiperBigComp swiperSmilarComp max-h-[34rem] mb-7"
  >
    <SwiperSlide v-for="(val, key) in 8" :key="key" class="rounded-4xl pb-12">
      <RouterLink to="#">
        <div class="bg-whiteBlue w-full rounded-xl p-4 px-8">
          <div class="flex gap-2 items-center pb-2 md:pb-6 lg:pb-8">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.5007 18.5941C12.8777 18.5941 9.11523 14.8316 9.11523 10.2087C9.11523 5.58574 12.8777 1.82324 17.5007 1.82324C22.1236 1.82324 25.8861 5.58574 25.8861 10.2087C25.8861 14.8316 22.1236 18.5941 17.5007 18.5941ZM17.5007 4.01074C14.0882 4.01074 11.3027 6.79616 11.3027 10.2087C11.3027 13.6212 14.0882 16.4066 17.5007 16.4066C20.9131 16.4066 23.6986 13.6212 23.6986 10.2087C23.6986 6.79616 20.9131 4.01074 17.5007 4.01074Z"
                fill="white"
              />
              <path
                d="M30.0268 33.1771C29.4289 33.1771 28.9331 32.6812 28.9331 32.0833C28.9331 27.0521 23.7997 22.9687 17.4997 22.9687C11.1997 22.9687 6.06641 27.0521 6.06641 32.0833C6.06641 32.6812 5.57057 33.1771 4.97266 33.1771C4.37474 33.1771 3.87891 32.6812 3.87891 32.0833C3.87891 25.8562 9.98932 20.7812 17.4997 20.7812C25.0101 20.7812 31.1206 25.8562 31.1206 32.0833C31.1206 32.6812 30.6247 33.1771 30.0268 33.1771Z"
                fill="white"
              />
            </svg>
            <p class="text-white">Мадина</p>
          </div>
          <div class="leading-relaxed text-white pb-2 md:pb-6 lg:pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque eaque quos esse totam a animi corrupti,
            sit deserunt veritatis.
          </div>
          <p class="date text-white">29.10.2022 | 14:32</p>
        </div>
      </RouterLink>
    </SwiperSlide>
  </Swiper> -->

  <CustomSwiper>
    <SwiperSlide v-for="review in store.reviews">
      <Review :review="review" />
    </SwiperSlide>
  </CustomSwiper>

  <div>
    <form class="md:w-4/5 grid grid-cols-2">
      <div class="flex flex-col items-start gap-4">
        <h3 class="title text-2xl text-primaryBlue pb-3">Поделитесь впечатлением о товаре</h3>
        <textarea
          class="bg-transparent outline-none text-primaryBlue rounded-lg p-3 border border-primaryBlue"
          cols="40"
          v-model="data.body"
          rows="5"
          placeholder="Напишите ваш отзыв"
        ></textarea>
        <span v-if="data.errors().body.error" class="text-danger">{{ data.errors().body.message }}</span>
        <div @click="addReview">
          <ButtonFillVue color="#002e69"><span class="py-2">Отправить отзыв</span></ButtonFillVue>
        </div>
      </div>
      <div>
        <div class="mb-3">
          <div class="flex items-end">
            <p class="mr-3 text-2xl text-primaryBlue">Оцените покупку</p>
            <svg
              v-for="i in 5"
              :key="i"
              @click="data.rating = i"
              aria-hidden="true"
              class="w-6 h-6 inline-block"
              :class="data.rating < i ? 'text-gray-300' : 'text-primaryBlue'"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
          <p v-if="data.errors().rating.error" class="text-danger">{{ data.errors().rating.message }}</p>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 70%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 17%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 8%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 4%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 1%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { SwiperSlide } from "swiper/vue";
import ButtonFillVue from "../buttons/ButtonFill.vue";
import CustomSwiper from "../swiper.vue";
import Review from "../Review.vue";
import { useProductDetailStore } from "../../store/productDetail";
import { reactive } from "vue";
import { useRoute } from "vue-router";
const store = useProductDetailStore();
const route = useRoute();

const data = reactive({
  body: "",
  rating: 0,
  clicked: false,

  errors() {
    return {
      body: { error: !this.body && this.clicked, message: "Iltimos fikringizni yozib qoldiring." },
      rating: { error: !this.rating && this.clicked, message: "Iltimos ratingni belgilang." },
    };
  },
});

const addReview = async () => {
  data.clicked = true;
  if (data.errors().body.error || data.errors().rating.error) return;

  await store.addReview(route.params.id, { body: data.body, rating: data.rating });

  data.clicked = false;
  data.body = "";
  data.rating = 0;
};
</script>

<style>
.swiperSmilarComp .swiper-button-next,
.swiperSmilarComp .swiper-button-prev {
  background-color: white;
}
@media (max-width: 768px) {
  .swiperSmilarComp .swiper-button-next,
  .swiperSmilarComp .swiper-button-prev {
    display: none;
  }
}
</style>
