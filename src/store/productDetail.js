import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
import { useUserRegister } from "./UserRegister";
const toast = useToast();

export const useProductDetailStore = defineStore("ProductDetail", {
  state: () => ({
    product: {},
    images: [],
    productSpecification: [],
    reviews: [],
    smilarProducts: [],
  }),
  actions: {
    async getOneProduct(id) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const data = await axios.get(`/products/${id}`);
        this.product = data.data.data.product;
        this.images = [
          this.product.image_url,
          ...this.product.product_detail.image_urls,
        ];
        this.productSpecification =
          data.data.data.product.product_detail.specifications;
        this.reviews = data.data.data.product.reviews;
        this.smilarProducts = data.data.data.product.category.products;

      } catch (error) {
        toast.error('Произошла ошибка!');
      } finally {
        loadingStore.loading = false;
      }
    },
    async addReview(id, data) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      const userStore = useUserRegister();
      const newReview = { body: data.body, rating: +data.rating };
      console.log(user);
      try {
        const res = await axios.post(`products/${id}/review`, newReview, {
          headers: {
            Authorization: `Bearer ${userStore.token}`,
          },
        });
        toast.success("Ваш комментарий принят.");
        console.log(res.data.message);
      } catch (error) {
        toast.error("Произошла ошибка!");
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
