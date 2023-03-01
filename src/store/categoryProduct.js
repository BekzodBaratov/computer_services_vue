import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useCategoryProduct = defineStore("categoryProduct", {
  state: () => ({
    limit: 12,
    products: [],
    error: "",
    loading: false,
  }),
  getters: {
    pageCount() {
      return Math.ceil(this.products.length / this.limit);
    },
  },
  actions: {
    async getProducts() {
      try {
        this.loading = true;
        const res = await axios.get("/products");
        this.products = res.data.data.products;
      } catch (error) {
        toast.error(error.message);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
