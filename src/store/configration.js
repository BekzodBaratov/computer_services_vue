import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useConfigration = defineStore("configration", {
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    async fetchData() {
      const store = useLoadingStore();
      store.loading = true;
      try {
        const res = await axios.get("configurations");
        this.data = res.data.data.configurations;
      } catch (e) {
        toast.error('Произошла ошибка!');

      } finally {
        store.loading = false;
      }
    },
  },

});
