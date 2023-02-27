import { defineStore } from "pinia";
import axios from "axios";

export const useServices = defineStore("servis", {
  state: () => {
    return {
      products: [],
      product: [],
      loading: true,
    };
  },
  actions: {
    async getAllProducts() {
      this.loading = true;
      try {
        const res = await axios({
          method: "get",
          url: "services",
          withCredentials: true,
        });
        this.products = res.data.data.services;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async getOneProduct(id) {
      this.loading = true;
      try {
        const res = await axios({
          method: "get",
          url: `/services/${id}`,
          withCredentials: true,
        });
        this.product = res.data.data.service;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
