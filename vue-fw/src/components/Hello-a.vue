<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <fieldset>
      <legend>Regular</legend>
      <a href="#/login">To Login</a>
      <a href="#/register">To Register</a>
      <a href="#/Index">To Index</a>
      <a href="#/List">To List</a>
      <a href="#/glo">To Glo Demo</a>
    </fieldset>
    <fieldset>
      <legend>D3</legend>
      <a href="#/d3/pie">D3 Pie</a>
      <a href="#/d3/asterpie">D3 Aster Pie</a>
    </fieldset>
    <fieldset>
      <legend>element-ui</legend>
      <a href="#/element/date">date-default</a>
    </fieldset>
    <fieldset>
      <legend>Transitions</legend>
      <a href="#/transitions/class">ClassName</a>
      <a href="#/transitions/customclass">CustomClass</a>
    </fieldset>
  </div>
</template>

<script>
  import SingleProgress from '@/common/singleprogressbar'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
        info:{
          aa:11
        }
    }
  },
    mounted() {
        setTimeout(function(){
            console.log(1111);
            SingleProgress.complete()
        },10000)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
fieldset{
  margin-top:5px;
  border-radius: 10px;
  /*display: -moz-flex;*/
  /*-webkit-transition: all .5s;*/
  /*-moz-user-select: none;*/
  /*background: linear-gradient(to bottom, white, black);*/
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  margin: auto 10px;
  color: #42b983;
}
</style>
