
// Aplicattion starting point

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Tooltip from 'vue-directive-tooltip';

import store from './store/index';

import 'vue-directive-tooltip/css/index.css';

Vue.use(Tooltip);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#wrapper')
