import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
const toast = useToast();

export const useFavoriteStore = defineStore("favoriteProduct", {
  state: () => ({
    products: [],
  }),
  actions: {
    async addProduct(id) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const data = await axios.post("products/favorites", { productId: id });
        console.log(data.data.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        loadingStore.loading = false;
      }
    },
    async getAllProducts() {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const data = await axios.get("products/favorites");
        console.log(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
