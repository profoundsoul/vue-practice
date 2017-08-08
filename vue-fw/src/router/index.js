import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
Vue.use(Router);

var asyncComponent = (path)=> {
  // return resolve => {
  //   require.ensure(['@/components/' + path], ()=>resolve(require('@/components/'+path)));
  // };
  return r=>require(['@/components/'+path], r);
};
var routes = [
  {path: '/', name: 'default', component: Hello   },
  {path: '/login', name: 'login', component: r=>require(['@/components/login'], r)},
  {path: '/register', name: 'register', component: r=>require(['@/components/register'], r), meta: {requireAuth: true}},
  {path: '/index', name: 'index', component: r=>require(['@/components/index'], r), meta: {requireAuth: true}},
  {path: '/list', name: 'list', component: r=>require(['@/components/list'], r), meta: {requireAuth: true}},
  {path: '/echart', name: 'echart', component: r=>require(['@/components/echarts'], r)},
  {path: '/*', name: '*', component: r=>require(['@/components/notfound'], r)}
];


const router = new Router({
    routes,
    scollBehavior(to, from ,savePosition){
      return {x:0, y:0};
    }
  }
);
//before required auth
router.beforeEach((to, from, next)=> {
  if (to.matched.some(r=>r.meta.requireAuth)) {
    //是否已经登录成功！
    Vue.axios.post('/restapi/accounts/api/login/login').then((r)=>{
      console.log(r);
    }).catch(err=>{
      console.log(err);
    });

    if (!document.cookie) {
      next({
        path: '/login',
        query: {from: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
