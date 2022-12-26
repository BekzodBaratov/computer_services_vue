import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./style.css";

createApp(App).use(router).use(i18n).use(createPinia()).mount("#app");
