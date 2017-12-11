<template>
    <div class="container">
        this is my Login
        <label value="用户名："></label><input type="text" v-model="username">
        <label value="密码："></label><input type="password" v-model="pwd">
    </div>
</template>
<script>
    import * as helper from '@/common/myhelper'

    export default {
        name:'login',
        data() {
            return {
                username: '',
                pwd: ''
            }
        },
        mounted() {
            console.log(helper.getUser());
            this.testRequire();
            this.testImport();
            this.testCommon();
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            console.log('beforeRouteEnter', +new Date)
            next();
        },
        methods:{
            testRequire(){
//                require(['@/common/myhelper'], function({getUser}){
//                    console.log('--require--',getUser());
//                })
            },
            testImport(){
//                import('@/common/myhelper').then(({getUser})=>{
//                    console.log('--import--',getUser());
//                })
            },
            testCommon(){
//                require([],function(){
//                    let {getUser} = require('@/common/myhelper')
//                    console.log('--import--',getUser());
//                })
            }
        }
    }
</script>

<style scoped>
    .container{
        background: red;
    }
</style>
