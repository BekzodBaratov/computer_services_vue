import { defineStore } from "pinia";

export const useUserRegister = defineStore("user", {
  state: () => {
    return {
      isRegisteration: false,
      user: null,
      users: [
        { id: 0, tel: "+998944455537", code: 123456, name: "Bekzod" },
        { id: 1, tel: "+998912345678", code: 123456, name: "valisher" },
      ],
    };
  },
});
