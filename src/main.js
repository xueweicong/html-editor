import Vue from "vue";

// import Mock from '@/mock';

import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/styles/index.scss"; // global css

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

require("@/mock/mock.js");

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
