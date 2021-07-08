import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiService from "./common/api_service";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
ApiService.init();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
