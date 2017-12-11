<template>
    <div>
        myToast ……
        <span>{{type}}</span>
    </div>
</template>
<script>
    export default {
        props:{
            type:Number
        },
        data() {
            return {};
        },
        mounted() {
            console.log(this.$route, this.$router, '----------------')
        }
    };
</script>
<style scoped>

</style>