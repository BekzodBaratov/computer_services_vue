<template>
  <CustomSwiper>
    <SwiperSlide v-for="review in store.reviews" :key="review">
      <Review :review="review" />
    </SwiperSlide>
  </CustomSwiper>

  <div>
    <form class="md:w-4/5 grid md:grid-cols-2 gap-8 md:gap-0">
      <div class="flex flex-col items-start gap-4">
        <h3 class="title text-2xl text-primaryBlue pb-3">
          Поделитесь впечатлением о товаре
        </h3>
        <textarea
          class="bg-transparent outline-none text-primaryBlue rounded-lg p-3 border border-primaryBlue"
          cols="40"
          v-model="data.body"
          rows="5"
          placeholder="Напишите ваш отзыв"
        ></textarea>
        <span v-if="data.errors().body.error" class="text-danger">{{
          data.errors().body.message
        }}</span>
        <div @click="addReview">
          <ButtonFillVue color="#002e69"
            ><span class="py-2">Отправить отзыв</span></ButtonFillVue
          >
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
          <p v-if="data.errors().rating.error" class="text-danger">
            {{ data.errors().rating.message }}
          </p>
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >5 star</span
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 70%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >70%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >4 star</span
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 17%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >17%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >3 star</span
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 8%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >8%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >2 star</span
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 4%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >4%</span
          >
        </div>
        <div class="flex items-center mt-4">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >1 star</span
          >
          <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div class="h-5 bg-primaryBlue rounded" style="width: 1%"></div>
          </div>
          <span class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >1%</span
          >
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
import { useUserRegister } from "../../store/UserRegister";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const store = useProductDetailStore();
const route = useRoute();
const router = useRouter();
const toast = useToast();
const userStore = useUserRegister();

const data = reactive({
  body: "",
  rating: 0,
  clicked: false,

  errors() {
    return {
      body: {
        error: !this.body && this.clicked,
        message: "Iltimos fikringizni yozib qoldiring.",
      },
      rating: {
        error: !this.rating && this.clicked,
        message: "Iltimos ratingni belgilang.",
      },
    };
  },
});

const addReview = async () => {
  data.clicked = true;
  if (!userStore.token) return toast.error("Не зарегистрирован");
  if (data.errors().body.error || data.errors().rating.error) return;

  await store.addReview(route.params.id, {
    body: data.body,
    rating: data.rating,
  });

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
