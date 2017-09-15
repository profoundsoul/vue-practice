// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import FastClick from 'fastclick';

import '@/polyfill/es6promise';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// console.log(33333333333333);
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
