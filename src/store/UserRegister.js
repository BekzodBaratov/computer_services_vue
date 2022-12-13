import { defineStore } from "pinia";

export const useUserRegister = defineStore("user", {
  state: () => {
    return {
      isRegisteration: false,
    };
  },
});
