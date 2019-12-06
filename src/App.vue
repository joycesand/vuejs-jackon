<template>
  <div id="app">

    <span>
      <router-link to='/home'>Home </router-link>
      </span>
    <span>
      <router-link to='/about us'>About Us </router-link>
      
      </span>
    <span>
      <router-link to='/product'>Product </router-link>
      </span>
    <span>
      <router-link to='/services'>Services </router-link>
      </span>


    <router-view></router-view>
    <!-- <button class="btn btn-primary">Get started</button> -->
    <!-- <AppBodyStructure /> -->
  </div>
</template>

<script>
// import AppBodyStructure from "./components/AppBodyStructure.vue";
export default {
  name: "app",
  components: {
    // AppBodyStructure (this means registering).
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
