import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
const toast = useToast();

export const useUserRegister = defineStore("user", {
  state: () => ({
    token: "",
    user: { name: "" },
    closemodal: true,
  }),
  getters: {
    isRegisteration(state) {
      return state.token ? true : false;
    },
  },
  actions: {
    async signIn(dataObj) {
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const { data } = await axios.post("users/signin", dataObj, { withCredentials: true });
        this.token = data.data.accessToken;
        this.user = data.data.user;
        console.log(data.data.user);
        toast.success('Вы успешно зарегистрировались');
      } catch (error) {
        toast.error("Произошла ошибка!");
      } finally {
        loadingStore.loading = false;
      }
    },
    async logout() {
      this.user = { name: "" };
      this.token = "";
    },
    async signup(dataObj) {
      console.log(dataObj);
      const loadingStore = useLoadingStore();
      loadingStore.loading = true;
      try {
        const res = await axios.post("/users/signup", dataObj);
        this.token = res.data.data.accessToken;
        this.user = res.data.data.user;
        console.log(res);
        toast.success("Вы успешно вошли в систему!");
        this.closemodal = false;
      } catch (error) {
        toast.error("Произошла ошибка!");
        this.closemodal = true;
      } finally {
        loadingStore.loading = false;
      }
    },
  },
  persist: true,
});
