<template>
    <div id="app">
        <img src="./assets/logo.png">
        <!--<transition :name="transition" mode="out-in">-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
        <!--</transition>-->
    </div>
</template>

<script>
    import './assets/global.css'

    export default {
        name: 'app',
        data() {
            return {
                transition: 'fade',
                includeView: [],
                excludeView: ''
            }
        },
        mounted() {
            //新增Include KeepAlive Views
//            this.includeView.push('1434')

            //新增Exclude KeepAlive Views
//            this.excludeView.push();
        },
        watch: {
            '$route'() {
                console.log('11111');
                console.log(this.$route.meta);
                this.transition = this.transition == 'slide-left' ? 'slide-right' : 'slide-left';
            }
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
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .child-view {
        position: relative;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(300px, 0);
        transform: translate(300px, 0);
    }

    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-300px, 0);
        transform: translate(-300px, 0);
    }
</style>
