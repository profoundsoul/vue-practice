<template>
    <div>
        this is my Login
        <label value="用户名："></label><input type="text" v-model="username">
        <label value="密码："></label><input type="password" v-model="pwd">
    </div>
</template>
<script>
    import * as helper from '@/common/myhelper'

    export default {
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

<style>

</style>
