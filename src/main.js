import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAuthenticate from "vue-authenticate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.use(VueAuthenticate, {
  baseUrl: "http://api.backend-challenge.techgames.compete-mcgill.ca",
  providers: {
    github: {
      clientId: "88b3cbf574c3871f61ee",
      clientSecret: "dcad773d270e25b49f0d1a6bc86d9a31ef67d1af",
      redirectUri: "http://backend-challenge.techgames.compete-mcgill.ca",
      scope: "user"
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
