import { createApp } from "vue";
import { createPinia } from "pinia";
// import Toast from "vue-toastification";

// import "vue-toastification/dist/index.css";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import router from "./routes";
import "./style.css";

const pinia = createPinia();

// pinia.use((context) => {
//   const storeId = context.store.$id;

//   const serilizer = {
//     serialize: JSON.stringify,
//     deserialize: JSON.parse,
//   };

//   const fromStorage = serilizer.deserialize(window.localStorage.getItem(storeId));

//   if (fromStorage) {
//     context.store.$patch(fromStorage);
//   }

//   // listen for changes and update locastroage
//   context.store.$subscribe((mutation, state) => {
//     window.localStorage.setItem(storeId, serilizer.serialize(state));
//   });
// });

createApp(App).use(router).use(i18n).use(pinia).mount("#app");
