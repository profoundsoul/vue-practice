<template>
    <div>
        <div v-if="!loading">
            <h1>欢迎来到主页</h1>
            <router-link to="/list">列表页面</router-link>
        </div>

        <div v-else>
            <div class="mask">
            </div>
            <!--<ClipLoader class="middle" :loading="loading"></ClipLoader>-->
            <RotateLoader class="middle" :loading="loading"></RotateLoader>
        </div>
        <AdvanceRegion></AdvanceRegion>
    </div>

</template>
<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import RotateLoader from 'vue-spinner/src/RotateLoader'

    export default {
        props:[],
        data() {
            return {
                title: '主页！',
                loading: false
            }
        },
        components: {
            ClipLoader,
            RotateLoader,
            AdvanceRegion:()=>({
                component: import('@/common/ui/advanceRegion'),
                loading: ClipLoader,
                error:()=>import('@/common/ui/error'),
                delay:100,
                timeout: 3000
            })

        },
        mounted() {
            var _this = this;
            setTimeout(function () {
                _this.loading = false;
            }, 2000);
        }
    }
</script>

<style scoped>
    .mask {
        position: fixed;
        left: 0rem;
        top: 0rem;
        background: #999999;
        opacity: 0.2;
        width: 100%;
        height: 100%;
    }

    .middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
