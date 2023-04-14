import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
import { useUserRegister } from "./UserRegister";
const toast = useToast();

export const useFavoriteStore = defineStore("favoriteProduct", {
  state: () => ({
    products: [],
  }),
  actions: {
    async addProduct(id) {
      const loadingStore = useLoadingStore();
      const user = useUserRegister();
      loadingStore.loading = true;
      console.log(user.token);
      try {
        const data = await axios.post(
          "products/favorites",
          { productId: id },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        console.log(data.data.data.message);
      } catch (error) {
        console.log(error);
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
        console.log(error);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
