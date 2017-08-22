<template>
  <div id="app">
    <div>
      <!-- THIS IS YOUR NEW <a> -->
      <router-link :to="{name: 'Home'}" class="btn btn-default">Home</router-link>
      <router-link :to="{name: 'CreateBlog'}" class="btn btn-default">Create Blog</router-link>
    </div>
    <hr>
    <img src="./assets/logo.png">

    <router-view></router-view>
    
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>