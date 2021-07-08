import Vue from "vue";
import App from "./App.vue";

import moment from "moment";

import {
  BNav,
  BNavbar,
  BFormInput,
  IconsPlugin,
  BFormFile,
  BCollapse,
  BFormGroup,
  BForm,
  BCard,
  BCardText,
  BButton,
  BFormTextarea,
  BRow,
  BContainer,
  BNavbarNav,
  BNavbarToggle,
  BNavbarBrand,
  BModal,
  BPagination,
  BLink,
  ToastPlugin,
  BCol,
  BAlert,
} from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
Vue.component("b-nav", BNav);
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-navbar-toggle", BNavbarToggle);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-file", BFormFile);
Vue.component("b-collapse", BCollapse);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form", BForm);
Vue.component("b-card", BCard);
Vue.component("b-card-text", BCardText);
Vue.component("b-button", BButton);
Vue.component("b-form-textarea", BFormTextarea);
Vue.component("b-row", BRow);
Vue.component("b-container", BContainer);
Vue.component("b-modal", BModal);
Vue.component("b-pagination", BPagination);
Vue.component("b-link", BLink);
Vue.component("b-col", BCol);
Vue.component("b-alert", BAlert);

Vue.use(ToastPlugin);
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
  render: (h) => h(App),
}).$mount("#app");
