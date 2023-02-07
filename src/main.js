import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./plugins/axios";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

let gauthClientId = "736839198215-famfbf5fibh3a2fnut8544gnvh85vpvb.apps.googleusercontent.com";
let options = { clientId: gauthClientId, scope: "email", prompt: "consent", fetch_basic_profile: false };

app.use(router);
app.use(i18n);
app.use(pinia);

app.mount("#app");

// import gAuthPlugin from "vue3-google-oauth2";
// import "vue-toastification/dist/index.css";
// app.use(gAuthPlugin, options);
