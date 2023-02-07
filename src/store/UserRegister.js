import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";

export const useUserRegister = defineStore("user", () => {
  const user = ref({ name: "" });

  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"));
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal));
    },
    { deep: true }
  );

  const isRegisteration = computed(() => {
    return user.value.name !== "";
  });

  return { isRegisteration, user };
});
