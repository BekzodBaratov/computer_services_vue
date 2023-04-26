import axios from "axios";
import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";
import { useRoute } from "vue-router";

export const useCategoryProduct = defineStore("categoryProduct", {
  state: () => ({
    limit: 12,
    products: [],
    maxPrice: 10000,
    minPrice: 0,
    error: "",
  }),
  getters: {
    pageCount() {
      return Math.ceil(this.products.length / this.limit);
    },
  },
  actions: {
    async getProducts(search) {
      const route = useRoute();
      const store = useLoadingStore();
      const params = route?.query?.search;
      try {
        store.loading = true;
        const res = await axios.get(`/products/search`, { params: { search: search || params || "" } });
        this.products = res.data.data.results;
        this.maxPrice = res.data.data.options.maxPrice;
        console.log(res.data.data);
      } catch (error) {
        this.error = error.message;
      } finally {
        store.loading = false;
      }
    },
  },
});
