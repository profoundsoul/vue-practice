<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <fieldset>
      <legend>Regular</legend>
      <router-link to="/login">To Login</router-link>
      <router-link to="/register">To Register</router-link>
      <router-link to="/Index">To Index</router-link>
      <router-link to="/List">To List</router-link>
      <router-link to="/glo">To Glo Demo</router-link>
    </fieldset>
    <fieldset>
      <legend>D3</legend>
      <router-link to="/d3/pie">D3 Pie</router-link>
      <router-link to="/d3/asterpie">D3 Aster Pie</router-link>
    </fieldset>
    <fieldset>
      <legend>element-ui</legend>
      <router-link to="/element/date">date-default</router-link>
    </fieldset>
    <fieldset>
      <legend>Transitions</legend>
      <router-link to="/transitions/class">ClassName</router-link>
      <router-link to="/transitions/customclass">CustomClass</router-link>
    </fieldset>
  </div>
</template>

<script>
  import SingleProgress from '@/common/singleprogressbar'
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
    mounted() {
        setTimeout(function(){
            console.log(1111);
            SingleProgress.complete()
        },20000)
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
