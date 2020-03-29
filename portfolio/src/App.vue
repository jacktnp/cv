<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap');

html{
  scroll-behavior: smooth;
}

h1{
  font-family: 'Julius Sans One', sans-serif;
}

p, h5{
  font-family: 'Mitr', sans-serif;
}

#app {
  color: #2c3e50;
}
</style>
