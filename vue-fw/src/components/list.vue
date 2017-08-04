<template>
  <div class="list">
    <h1>This is my List!!</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        title:'List'
      }
    },
    beforeRouterEnter(to, from, next){
      next();
    }
  }
</script>
<style scoped>
  .list{
    color: red;
  }
</style>
