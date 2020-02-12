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
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  providers: {
    github: {
      clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
      redirectUri: process.env.VUE_APP_GITHUB_CLIENT_REDIRECT_URI,
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
