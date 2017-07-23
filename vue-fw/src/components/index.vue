<template>
  <div>
    <h1>欢迎来到主页</h1>
    <router-link to="/list">列表页面</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        title:'主页！'
      }
    }
  }
</script>
