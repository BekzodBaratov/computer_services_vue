import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loadingStore", {
  state: () => ({
    loading: false,
  }),
});
