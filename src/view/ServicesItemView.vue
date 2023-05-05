<template>
  <div className="md:w-3/4 w-4/5 mx-auto my-10 space-y-24 md:space-y-32 lg:space-y-24 xl:space-y-12 min-h-screen">
    <div className="flex justify-between  flex-col-reverse lg:flex-row gap-6">
      <div className="flex-6  flex flex-col gap-4 md:gap-8">
        <h2 className="text-primary  font-bold text-[24px] md:text-5xl">{{ store.product.name }}</h2>
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
          className="sm:max-w-lg aspect-video float-right object-cover"
        />
      </div>
    </div>

    <div className="flex flex-col  gap-16">
      <h2 className="text-primary font-bold text-[24px] md:text-5xl  max-w-md">
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

    <div class="flex items-center justify-center pt-10 sm:pt-20 md:pt-40">
      <ButtonFillVue color="#28A745">
        <a class="py-2 px-4 text-2xl" :href="'tel:' + store.product.phone">{{ t("service.btn") }}</a>
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

if (store.product.id != id) store.getOneService(id);
</script>
