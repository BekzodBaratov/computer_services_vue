import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
const toast = useToast();

export const useMainProducts = defineStore("mainProducts", {
  state: () => ({ categories: [] }),

  actions: {
    async getAllProductsByCategory() {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const res = await axios.get("/categories");
        this.categories = res.data.data.categories;
      } catch (error) {
        toast.error('Произошла ошибка!');
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
