import Vue from "vue";
import App from "./App.vue";

import vdt from "../dist/index";

Vue.use(vdt);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
