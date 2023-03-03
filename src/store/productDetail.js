import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
const toast = useToast();

export const useProductDetailStore = defineStore("ProductDetail", {
  state: () => ({
    product: [],
  }),
  actions: {
    async getOneProduct(id) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const data = await axios.get(`/products/${id}`);
        console.log(data.data);
        this.product = data.data;
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
