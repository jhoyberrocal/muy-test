import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import jhToast from "@/plugins/jhToast";

import './scss/index.scss';

Vue.config.productionTip = false;
Vue.use(jhToast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
