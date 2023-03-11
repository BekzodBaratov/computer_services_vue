import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
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
        this.images = [this.product.image_url, ...this.product.product_detail.image_urls];
        this.productSpecification = data.data.data.product.product_detail.specifications;
        this.reviews = data.data.data.product.reviews;
        this.smilarProducts = data.data.data.product.category.products;
        console.log(data.data.data.product);
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
    async addReview(id, data) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      const newReview = { body: data.body, rating: +data.rating };
      try {
        const res = await axios.post(`products/${id}/review`, newReview, { withCredentials: true });
        toast.success("Sizning fikringiz qabul qilindi.");
        console.log(res.data.message);
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
