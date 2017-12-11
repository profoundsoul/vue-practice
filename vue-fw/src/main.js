// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/polyfill/ie'
import '@/polyfill/es6promise'
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FastClick from 'fastclick'
import { DatePicker, Row, Col } from 'element-ui'
import SingleProgress from '@/common/singleprogressbar'
import router from './router'
// import 'promise_test'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// import '@/assets/el-theme/index.css'

// Vue.use(ElementUI)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Col)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// console.log(33333333333333);
FastClick.attach(document.body)
SingleProgress.start()


router.beforeEach((to, from, next) => {
  console.log('before Each', +new Date)
    next();
});
router.afterEach((to, from) => {
    console.log('after Each');
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
