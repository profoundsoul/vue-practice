<template>
  <div class="container">
    <h1>欢迎来到注册页面！</h1>
    <div>

      <label >用户名：</label>
      <input type="text" v-model="username">
      <input type="text" >
    </div>
    <mySync></mySync>
  </div>
</template>
<script>
    export default {
        name:'register',
        data() {
            return {
                username: '',
                pwd: '',
                repwd: ''
            }
        },
        components: {
            'mySync': () => import('@/common/ui/myasyncpage')
        },
        created() {
            console.log('exec created!');
        },
        mounted() {
            console.log('exec mounted!');
        },
        updated() {
            console.log('exec updated!');
        }
    };
</script>
<style scoped>
  .container{
    background: yellow;
  }
</style>
