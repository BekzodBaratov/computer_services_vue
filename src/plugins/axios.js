import axios from "axios";
import i18n from "./i18n";

// axios.defaults.baseURL = "https://plankton-app-vomkh.ondigitalocean.app/api/v1/";
// axios.defaults.baseURL = "http://167.71.62.65:8000/api/v1";
axios.defaults.baseURL = "https://seal-app-xlr8l.ondigitalocean.app/api/v1";
axios.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = i18n.global.locale.value;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
