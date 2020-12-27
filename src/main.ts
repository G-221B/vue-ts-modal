import Vue from 'vue';
import App from './App.vue';
import modal from './extends/modal';
import { TModal } from './extends/typings';

Vue.config.productionTip = false;
Vue.prototype.modal = modal;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
