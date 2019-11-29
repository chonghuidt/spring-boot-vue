<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
 <!--   <router-view/>-->
    <Login></Login>
  </div>
</template>

<script>
/*export default {
  name: 'App'
}*/
import Login from '@/components/register'
export default {
  name: 'App',
  components: {
    'Login': Login
  },
  data() {
    return {}
  }
}
</script>

<style>
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  text-align: center;
  margin-top:400px ;
}
</style>
