<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body {
  margin: 0;
  /*width: 100vw;*/
  /*height: 100vh;*/
}
* {
  box-sizing: border-box;
  font-family: Microsoft YaHei, Arial, Georgia, Serif, sans-serif;
}
</style>
