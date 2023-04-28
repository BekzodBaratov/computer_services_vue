import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
import axios from "axios";

export const useBannerStore = defineStore("bannerStore", {
  state: () => ({
    banners: [],
  }),
  actions: {
    async getAllBanners() {
      const loadingStore = useLoadingStore();
      const toast = useToast();
      try {
        loadingStore.loading = true;
        const banners = await axios.get("/swapers");
        this.banners = banners.data.data.swapers;
      } catch (error) {
        toast.error(error.message);
      } finally {
        loadingStore.loading = false;
      }
    },
  },
});
