<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <transitionEffect>

        </transitionEffect>
        <!--<transition :name="transition">-->
            <!--<router-view class="child-view"></router-view>-->
        <!--</transition>-->
       <!-- <div>
            <keep-alive>
                <router-view class="child-view"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
        </div>-->
    </div>
</template>

<script>
    import './assets/global.css'
    import transitionEffect from './common/transitioneffect.vue'

    export default {
        name: 'app',
        data () {
            return {
                transition: 'fade',
                includeView: [],
                excludeView: ''
            }
        },
        mounted () {
            //新增Include KeepAlive Views
//            this.includeView.push('1434')

            //新增Exclude KeepAlive Views
//            this.excludeView.push();
//            console.log(1111111111111)
        },
        watch: {
            '$route' (oldV, newV) {
//                console.log('11111')
//                console.log(this.$route.meta)
//                console.log('-----', this.$router, oldV, newV)
//                this.transition = this.transition == 'slide-left' ? 'slide-right' : 'slide-left'
            }
        },
        components: {
            transitionEffect
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow-x: hidden;
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s ease;
    }

    .fade-enter, .fade-leave-active {
    / / opacity: 0
    }

    .child-view {
        margin: 0px;
        padding: 0px;
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        /*transition: all 2s linear;*/
        transition: all 2s cubic-bezier(.55, 0, .1, 1);
        overflow-x: hidden;
    }

    .slide-left-enter, .slide-right-leave-active {
    / / opacity: 0;
        -webkit-transform: translate3D(100vw, 0, 0);
        transform: translate3D(100vw, 0, 0);
    }

    .slide-left-leave-active, .slide-right-enter {
    / / opacity: 0;
        -webkit-transform: translate3D(-100vw, 0, 0);
        transform: translate3D(-100vw, 0, 0);
    }

</style>
