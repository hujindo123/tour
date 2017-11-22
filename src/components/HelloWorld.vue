<template>
  <div class="hello">
    <h2>Ecosystem</h2>
    <router-link to="a">Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  a {
    color: #42b983;
  }
</style>
