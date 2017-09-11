<template>
    <div class="list">
        <h1 @mouseenter="hover" @mouseleave="hover">This is my List!!</h1>
        <msglist v-if="showlist" :list="list"></msglist>
        <div v-else>加载中……</div>
        <asyncpage></asyncpage>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                title: 'List',
                list: [
                    1, 2, 3, 54, 6, 7, 43, 3
                ],
                showlist: false
            }
        },
        methods: {
            hover(){
//        this.showlist = !this.showlist;
//        console.log(this.showlist);
            }
        },
        beforeRouterEnter(to, from, next){
            next();
        },
        mounted(){
            setTimeout(()=> {
                this.showlist = true;
            }, 2000);
        },
        components: {
            msglist: ()=>import('@/common/ui/msglist'),
            asyncpage:function (resolve, rejected) {
                require.ensure([], function () {
                    resolve(require('@/common/ui/myasyncpage'))
                });
            }
        }
    }
</script>
<style scoped>
    .list {
        color: red;
    }
</style>
