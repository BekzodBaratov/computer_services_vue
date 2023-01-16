import { createApp } from "vue";
import { createPinia } from "pinia";
// import Toast from "vue-toastification";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./plugins/axios";
// import "vue-toastification/dist/index.css";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(pinia);
// app.use(Toast);

app.mount("#app");
