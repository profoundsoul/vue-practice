<template>
  <div>
    <h1>欢迎来到注册页面！</h1>
    <div>

      <label >用户名：</label>
      <input type="text" v-model="username">
    </div>
    <mySync></mySync>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        username:'',
        pwd:'',
        repwd:''
      }
    },
    components:{
      'mySync':()=>import('@/common/ui/myasyncpage')
    }
  }
</script>
