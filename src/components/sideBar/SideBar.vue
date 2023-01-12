<template>
  <Teleport to="body">
    <div
      v-if="isOpenSidebar"
      @click="emit('openSidebar')"
      class="fixed z-[999999] inset-0 bg-[#0006] backdrop-blur-sm"
    ></div>
    <div
      :class="isOpenSidebar ? 'translate-x-0' : '-translate-x-full'"
      class="fixed z-[999999] duration-200 inset-y-0 left-0 w-2/3 bg-blue100"
    >
      <div class="relative h-full px-8 py-8">
        <div class="">
          <RouterLink
            to="/profile"
            class="border rounded-lg border-gray-700 py-3 px-3 flex items-center gap-3 mb-8 hover:bg-[#d8e0ef] active:bg-[#d8e0ef] duration-200"
          >
            <div>
              <img
                class="h-20 aspect-square rounded-full object-cover object-center"
                src="../../assets/img/static/man face.jpg"
                alt=""
              />
            </div>
            <div class="">
              <p class="text-lg font-semibold">Samariddin</p>
              <p class="email">smariddin@gmail.com</p>
            </div>
          </RouterLink>

          <ul class="pl-4 text-xl text-gray-600 font-semibold capitalize space-y-6">
            <li v-for="item in routeNav" :key="item.id">
              <RouterLink :to="item.link">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="absolute bottom-0">logout</div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["openSidebar"]);
const props = defineProps(["isOpenSidebar"]);

const routeNav = ref([
  { id: 1, name: "Сервис", link: "/services" },
  { id: 2, name: "Магазин", link: "/shop" },
  { id: 3, name: "Конфигуратор", link: "/configurator" },
  { id: 4, name: "О нас", link: "/about" },
  { id: 5, name: "Контакты", link: "/contact" },
]);
</script>
