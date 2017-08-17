import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import FastClick from 'fastclick'

FastClick.attach(document.body);
let arr = new Array(11).fill(1);
console.log(arr);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


console.log('main excute and Success！');
