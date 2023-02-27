import { defineStore } from "pinia";
import axios from "axios";

export const useServices = defineStore("servis", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async fetchApi() {
      try {
        const res = await axios({
          method: "get",
          url: "services",
          headers: {},
          withCredentials: true,
        });
        this.products = res.data.data.services;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
