<template>
  <div
    v-if="!store.loading"
    className="md:w-3/4 w-4/5 mx-auto my-10 space-y-44 md:space-y-32 lg:space-y-24 xl:space-y-12 min-h-screen"
  >
    <div className="flex justify-between  flex-col-reverse lg:flex-row gap-6">
      <div className="flex-6  flex flex-col gap-4 md:gap-8">
        <h2 className="text-primary  font-bold text-5xl">{{ store.product.name }}</h2>
        <div className="grid grid-cols-1 w-full  space-y-3">
          <div v-for="(offer, i) in store.product.resolve_problems" :key="i" className="text-primary w-full flex">
            <p className="text-2xl pr-6">
              <i class="fa-solid fa-check text-green-500"></i>
              {{ offer }}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-2 self-center justify-self-end">
        <img
          :src="store.product.image_url"
          :alt="store.product.image"
          className="max-w-lg aspect-video float-right object-cover"
        />
      </div>
    </div>

    <div className="flex flex-col  gap-16">
      <h2 className="text-primary font-bold text-5xl  max-w-md">
        {{ t("service.help") }}
      </h2>
      <div className="grid gap-7 grid-cols-2 h-4">
        <div v-for="(list, i) in store.product.features" :key="i" className="text-primary flex ">
          <p className="text-2xl w-full pr-8">
            <i class="fa-solid fa-xmark text-danger"></i>
            {{ list }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center pt-20 md:pt-40">
      <ButtonFillVue color="#28A745">
        <a class="py-2 px-4 text-2xl" href="tel:+998944455537">{{ t("service.btn") }}</a>
      </ButtonFillVue>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useServices } from "../store/services";
import { useI18n } from "vue-i18n";
import ButtonFillVue from "../components/buttons/ButtonFill.vue";

const store = useServices();
const route = useRoute();
const { t } = useI18n();
const id = route.params.id;

if (store.product.id != id) store.getOneProduct(id);
</script>

<!-- 
{
  id: 1,
  name: "Ремонт принтеров",
  href: "#",
  price: "Ремонт офисных и портативных принтеров фирмы Canon, Epson, Hp, Samsung и другие...",
  imageAlt: "Ремонт принтеров",
  description: {
    title: "Ремонт ноутбуков",
    offers: ["Бесплатная диагностика", "Опытные мастера", "Выездной ремонт", "Качественный ремонт"],
    desc: [
      "Ноутбук не включается",
      "Полоса на экране",
      "Не заряжается",
      "Не работает тачпад",
      "Не работает клавиатура",
      "Перегрев",
    ],
  },
},
-->

<!-- 
createdAt:"2023-02-27T07:00:07.176Z" 
features:['yaxshi ishlamasa', "qayta o'rnatish kerak bolsa", "joyini o'zgartirish", "yaxshi ko'rsatilmaganda"] 
id : 3 
image : "b0f1e545-77b2-47f2-a612-ce827f60cb06" 
image_url :"https://service-files.fra1.digitaloceanspaces.com/b0f1e545-77b2-47f2-a612-ce827f60cb06?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00GUC343KYK3XHNL3N%2F20230227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230227T070007Z&X-Amz-Expires=86400&X-Amz-Signature=26835291ea6e04b495290eb373298550619b153ba3cd80c23b3221dd579b27c4&X-Amz-SignedHeaders=host&x-id=GetObject"
name : "Видео наблюдения" 
resolve_problems : ["a'lo darajadagi xizmat", 'narxning arzonligi', 'xizmat kafolatlanishi', "O'zbekistonda barcha hududlarida"]-->
