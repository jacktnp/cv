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

p, li, h2, h3, h4, h5{
  font-family: 'Mitr', sans-serif;
}

.navbar-tool{
    margin: 0 auto;
    background: #0099ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #1488cc, #2b32b2); /*W3C IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+*/
}

.space{
    width: 1px;
    height: 7.5em;
}

.space2{
    width: 1px;
    height: 5em;
}

#app {
  color: #2c3e50;
  background-color: #fcfcfc;
}
</style>
