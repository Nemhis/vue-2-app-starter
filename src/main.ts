import Vue from 'vue'
import App from "./components/App/App.vue";
import router from "./router";
import store from "./store";

import './plugins/vue-fragment';
import './plugins/is-mobile';
import './plugins/dayjs';
import './plugins/vee-validate';
import './plugins/v-the-mask';
import './plugins/bool-attr';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
