import { createApp } from "vue";
import { createPinia } from "pinia";
import Paginate from "vuejs-paginate-next";
import { MotionPlugin } from "@vueuse/motion";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Toast from "vue-toastification";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";

import "./plugins/axios";
import "vue-toastification/dist/index.css";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(i18n);
app.use(pinia);
app.use(Paginate);
app.use(Toast);
app.use(MotionPlugin);

app.mount("#app");
