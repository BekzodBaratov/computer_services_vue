import { createApp } from "vue";
import { createPinia } from "pinia";
import "./plugins/axios";
import GAuth from "vue-google-oauth2";
import dotenv from "dotenv";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);
dotenv.config();

const gauthOption = {
  clientId: "736839198215-famfbf5fibh3a2fnut8544gnvh85vpvb.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};

app.use(router);
app.use(i18n);
app.use(pinia);

app.mount("#app");

// app.use(GAuth, gauthOption);
// createApp(App).use(router).use(GAuth, gauthOption).use(i18n).use(pinia).mount("#app");
