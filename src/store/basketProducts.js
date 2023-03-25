import { defineStore } from "pinia";

export const useBasketStore = defineStore("basketProduct", {
  state: () => ({
    products: [],
  }),
  getters: {
    pageCount() {
      return Math.ceil(this.products.length / this.limit);
    },
  },
  actions: {},
});
