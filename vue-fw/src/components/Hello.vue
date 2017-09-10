<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <br>
    <router-link to="/login">To Login</router-link>
    <br>
    <router-link to="/register">To Register</router-link>
    <br>
    <router-link to="/Index">To Index</router-link>
    <br>
    <router-link to="/List">To List</router-link>
    <br>
    <fieldset>
      <legend>D3</legend>
      <router-link to="/d3/pie">D3 Pie</router-link>
      <br>
      <router-link to="/d3/asterpie">D3 Aster Pie</router-link>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
