<template>
    <div>
        <button v-on:click="show = !show">
            Toggle
        </button>
        <br>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        <br>
        <div>
            <button @click="show2 = !show2">Toggle show</button>
            <br>
            <transition name="bounce">
                <p v-if="show2">Look at me!</p>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: true,
                show2:true
            };
        }
    }
</script>
<style scoped>
    p{
        transition: all 5s ease;
        font-size:40px;
        /*transform: skew(0deg,10deg);*/
        transform-origin: 0% 0%;
        display: inline-block;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        /*transform:   translateY(100px) rotate(90deg) translateX(100px)*/
        transform:rotate(360deg);
        /*transform-origin: left top 0;*/
    }
    .fade-enter-to{
        opacity: 1;
        /*transform:rotate(0deg) translateY(0%)*/
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0) translateX(-50%);
        }
        50% {
            transform: scale(1.5) translateX(0%);
        }
        100% {
            transform: scale(1) translateX(100%);
        }
    }

</style>