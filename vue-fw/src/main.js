// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import FastClick from 'fastclick';
import {DatePicker,Row,Col} from 'element-ui'
import SingleProgress from '@/common/singleprogressbar'


// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// import '@/assets/el-theme/index.css'

import '@/polyfill/es6promise';

// Vue.use(ElementUI)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Col)
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// console.log(33333333333333);
FastClick.attach(document.body);
SingleProgress.start();



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
