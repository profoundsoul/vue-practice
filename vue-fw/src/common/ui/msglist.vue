<template>
    <ul v-if="list.length">
       <li v-for="item in list" @click="getMessage(item)" :data-item="item">{{item}}</li>
    </ul>
</template>
<script>
    export default {
        data(){
            return {};
        },
      props:{
        list:{
          type:Array,
          default:[],
          required:true
        }
      },
      methods:{
        getMessage(item){
          console.log(item);
        }
      }
    }
</script>
<style scoped>
  ul{
    list-style: none;
  }
  li{
    line-height: 35px;
    color: #333;
  }
  li:hover{
    background: gray;
    color: #fff;
  }

</style>
