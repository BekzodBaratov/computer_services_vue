<template>
  <div class="container mx-auto grid md:grid-cols-2 gap-12 my-12 items-center">
    <div class="left font-semibold">
      <h3 class="text-5xl pb-2 font-semibold text-gray-800">
        {{ t("about.title") }}
      </h3>
      <p class="pr-24 text-xl text-gray-500">{{ aboutData?.text }}</p>
    </div>
    <div class="right grid gap-3 md:mx-16">
      <img :src="aboutData?.images" alt="imagws" class="object-cover" />
    </div>
  </div>

  <div
    class="mt-[35px] sm:mt-[50px] md:mt-[60px] lg:mt-[96px] container !max-w-[1000px] px-4 md:px-0 mx-auto"
  >
    <p
      class="font-bold text-[20px] md:text-2xl lg:text-[32px] text-[#22232C] leading-130 mb-6"
    >
      Часто задаваемые вопросы
    </p>
    <AccordionCard
      v-for="(item, index) in faqData"
      :key="index"
      v-bind="{
        number: index + 1,
        question: item.question,
        answer: item.answer,
        active: active,
      }"
      @click="clickCard"
    />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import AccordionCard from "../components/card/Accordion.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const { t } = useI18n();

let active = ref(1);
const clickCard = (e) => {
  if (active.value === e) {
    active.value = 0;
  } else {
    active.value = e;
  }
};

const faqData = ref([
  {
    answer:
      "Добавьте понравившийся товар в корзину, напишите свое имя, фамилию и номер телефона и нажмите кнопку купить Мы свяжемся с вами!",
    question: "Как купить товары, представленные на сайте?",
  },
  {
    answer:
      "Для этого перейдите в раздел Конфигурация нашего сайта и выберите подходящее вам оборудование из категорий.",
    question:
      "Как мне отсортировать необходимое мне компьютерное оборудование?",
  },
  {
    answer:
      "Для этого вы должны сначала зарегистрироваться на нашем сайте, затем вы можете перейти в раздел продукта и оставить свои комментарии в разделе комментариев.",
    question: "Как я могу написать отзыв о товарах?",
  },
  {
    answer:
      "Для этого зайдите в сервисный раздел нашего сайта и выберите подходящий Вам вид услуги, нажмите кнопку вызова!",
    question: "Как пользоваться предоставляемыми услугами?",
  },
  {
    answer:
      "Для этого перейдите в раздел Конфигурация нашего сайта и выберите подходящее вам оборудование из категорий.",
    question:
      "Как мне отсортировать необходимое мне компьютерное оборудование?",
  },
  {
    answer:
      "Для этого вы должны сначала зарегистрироваться на нашем сайте, затем вы можете перейти в раздел продукта и оставить свои комментарии в разделе комментариев.",
    question: "Как я могу написать отзыв о товарах?",
  },
]);

const aboutData = ref();

function fetchData() {
  axios.get("/about").then((res) => {
    aboutData.value = res.data.data.about;
    console.log(res);
  });
}
onMounted(() => {
  fetchData();
});
</script>
