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

var p1 = new Promise((r) => {
  r({name: 'linq'})
})
p1.then(d => {
  return new Promise(r => {
    r(Object.assign({}, d, {age: 18}))
  })
}).then(d => {
  console.log(1, d)
  tt=2
  return Promise.resolve(Object.assign(d, {addr: 'tttt'}))
}).catch(err=>{
  return new Promise(r=>{
    setTimeout(()=>{
      r({aa:1234})
    },5000)
  })
}).then(d => {
  console.log(2, d)
  Promise.reject({aa:2})
}).catch(err => {
  console.log(3, err)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
