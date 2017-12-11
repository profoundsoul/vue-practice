<template>
    <transition :name="direction">
        <router-view class="child-view"></router-view>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                direction: ''
            }
        },
        watch: {
            '$route' (oldV, newV) {
                console.log('$route watch', oldV, newV, +new Date)
                this.direction = this.direction == 'slide-left' ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>
<style scoped>
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