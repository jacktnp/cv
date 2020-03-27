<template>
  <div id="app">
    <cover></cover>
    <router-view/>
  </div>
</template>

<script>
import cover from "@/components/cover.vue";
import home from "@/components/home.vue";

export default {
  name: 'App',
  components: {
    cover, home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap');

h1{
  font-family: 'Julius Sans One', sans-serif;

}

p, h5{
  font-family: 'Mitr', sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
