import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useServices = defineStore("servis", {
  state: () => {
    return {
      products: [],
      product: [],
    };
  },
  actions: {
    async getAllProducts() {
      const store = useLoadingStore();
      store.loading = true;
      try {
        const res = await axios({
          method: "get",
          url: "services",
          withCredentials: true,
        });
        this.products = res.data.data.services;
      } catch (e) {
        toast.error('Произошла ошибка!');
      } finally {
        store.loading = false;
      }
    },
    async getOneService(id) {
      const store = useLoadingStore();
      store.loading = true;
      try {
        const res = await axios.get(`/services/${id}`);
        this.product = res.data.data.service;
      } catch (e) {
        toast.error('Произошла ошибка!');
      } finally {
        store.loading = false;
      }
    },
  },
});
