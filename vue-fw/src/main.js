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

// console.log(111);
// debugger;
var p = new Promise((r)=>{});
// console.log(11111111111);
var testarr = new Array(22);
// console.log(6666666666666666666);
// testarr.fill(2);
for (let i = 0; i < testarr.length; i++) {
  console.log(testarr[i]);
}

function testArr(){
  var test = Array.of(arguments);
  console.log(test);
}
testArr('linq', 'pppp')
// console.log(33333333333333);
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
