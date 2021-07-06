import Vue from "vue";
import App from "./App.vue";

import moment from "moment";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router";
import store from "./store";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

Vue.filter("formatDate", function (value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
