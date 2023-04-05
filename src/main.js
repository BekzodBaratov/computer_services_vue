import { createApp } from "vue";
import { createPinia } from "pinia";
import Paginate from "vuejs-paginate-next";
import { createPersistPlugin } from "pinia-persist";
import { MotionPlugin } from "@vueuse/motion";
import Toast from "vue-toastification";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./plugins/axios";
import "vue-toastification/dist/index.css";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);
pinia.use(createPersistPlugin());

app.use(router);
app.use(i18n);
app.use(pinia);
app.use(Paginate);
app.use(Toast);
app.use(MotionPlugin);

app.mount("#app");

// import "vue-toastification/dist/index.css";
