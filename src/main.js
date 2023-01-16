import { createApp } from "vue";
import { createPinia } from "pinia";
import GAuth from "vue3-google-oauth2";
// import Toast from "vue-toastification";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./plugins/axios";
// import "vue-toastification/dist/index.css";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

const gAuthOptions = {
  clientId: "736839198215-famfbf5fibh3a2fnut8544gnvh85vpvb.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
};

app.use(GAuth, gAuthOptions);
app.use(router);
app.use(i18n);
app.use(pinia);

app.mount("#app");
