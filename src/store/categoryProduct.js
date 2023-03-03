import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";

export const useCategoryProduct = defineStore("categoryProduct", {
  state: () => ({
    limit: 12,
    products: [],
    error: "",
  }),
  getters: {
    pageCount() {
      return Math.ceil(this.products.length / this.limit);
    },
  },
  actions: {
    async getProducts() {
      const store = useLoadingStore();
      try {
        store.loading = true;
        const res = await axios.get("/products");
        this.products = res.data.data.products;
      } catch (error) {
        this.error = error.message;
      } finally {
        store.loading = false;
      }
    },
  },
});
