import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useMainProducts = defineStore("mainProducts", {
  state: () => ({
    categories: [],
    loading: true,
  }),
  actions: {
    async getAllProductsByCategory() {
      try {
        this.loading = true;
        const res = await axios.get("/categories");
        this.categories = res.data.data.categories;
        console.log(res.data.data.categories);
      } catch (error) {
        toast.error(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
});
