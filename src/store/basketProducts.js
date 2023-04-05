import { defineStore } from "pinia";

export const useBasketStore = defineStore(
  "basketProduct",
  {
    state: () => ({
      products: [],
    }),
    getters: {
      allSum() {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
          sum += this.products[i].count * this.products[i].product_detail.price;
        }
        return sum;
      },
      productCount() {
        return this.products.length;
      },
    },
    actions: {},
  },
  { persist: { storage: window.localStorage } }
);
