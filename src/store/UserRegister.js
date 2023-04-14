import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "./loading";
import { useRouter } from "vue-router";
const toast = useToast();
const router = useRouter();

export const useUserRegister = defineStore(
  "user",
  {
    state: () => ({
      token: "",
      user: { name: "" },
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
          toast.success(data.message);
        } catch (error) {
          toast.error(error.message + ", Please try again");
        } finally {
          loadingStore.loading = false;
        }
      },
      async logout() {
        const loadingStore = useLoadingStore();
        loadingStore.loading = true;
        try {
          await axios.delete("users/logout", { withCredentials: true });
          this.user = { name: "" };
          this.token = "";
          router.push("/");
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        } finally {
          loadingStore.loading = false;
        }
      },
    },
  },
  { persist: { storage: window.localStorage } }
);
