<template>
    <div>
      this is my Login
      <label value="用户名："></label><input type="text" v-model="username">
      <label value="密码："></label><input type="password" v-model="pwd">
    </div>
</template>
<script>
  export default {
    data(){
      return {
        username:'',
        pwd:''
      }
    }
  }
</script>

<style>

</style>
