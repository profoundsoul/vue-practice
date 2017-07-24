import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
  routes: [
    {name: 'Hello', path: '/', component: Hello},
    {name: 'login', path: '/login', component:r=>require.ensure(['@/components/login.vue'], ()=>{r(require('@/components/login.vue'))}, 'login')}
  ]
})
