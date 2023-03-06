import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
const toast = useToast();

export const useProductDetailStore = defineStore("ProductDetail", {
  state: () => ({
    product: {},
    images: [],
  }),
  actions: {
    async getOneProduct(id) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const data = await axios.get(`/products/${id}`);
        console.log(data.data.data.product);
        this.product = data.data.data.product;
        this.images = [this.product.image_url, ...this.product.product_detail.image_urls];
        console.log(this.images);
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
