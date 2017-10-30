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
  {path: '/login', name: 'login', component: r=>require.ensure([], ()=>r(require('@/components/login')))},
  // {path: '/register', name: 'register', component: r=>require(['@/components/register'], r), meta: {requireAuth: true}},
  {path: '/register', name: 'register', component: r=>require.ensure([], ()=>r(require('@/components/register')))},
  {path: '/index', name: 'index', component: r=>require(['@/components/index'], r), meta: {requireAuth: true}},
  {path: '/list', name: 'list', component: r=>require(['@/components/list'], r), meta: {requireAuth: true}},
  {path: '/echart', name: 'echart', component: r=>require(['@/components/echarts'], r)},
  {path: '/erts', name: 'erts', component: r=>require(['@/components/erts'], r)},
  {path: '/bars', name: 'bars', component: r=>require(['@/components/bars'], r)},
  {path: '/glo', name: 'glo', component: r=>require(['@/components/glodemo'], r)},
  {path: '/d3/pie', name: 'd3-pie', component: r=>require(['@/components/d3/pie'], r)},
  {path: '/d3/asterpie', name: 'asterpie', component: r=>require(['@/components/d3/asterpie'], r)},
  {path: '/d3/tran', name: 'tran', component: r=>require(['@/components/d3/tran'], r)},

];

routes=routes.concat([
    {path: '/element/date', name: 'date', component: r=>require(['@/components/element/date'], r)},
])

routes=routes.concat([
    {path: '/transitions/class', name: 'class', component: r=>require(['@/components/transitions/class'], r)},
    {path: '/transitions/customclass', name: 'customclass', component: r=>require(['@/components/transitions/customclass'], r)},
])

routes.push({path: '/*', name: '*', component: r=>require(['@/components/notfound'], r)})


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
    // Vue.axios.post('/restapi/accounts/api/login/login').then((r)=>{
    //   console.log(r);
    // }).catch(err=>{
    //   console.log(err);
    // });
next();
  //   if (!document.cookie) {
  //     next({
  //       path: '/login',
  //       query: {from: to.fullPath}
  //     });
  //   } else {
  //     next();
  //   }
  } else {
    next();
  }
});

export default router;
