<template>
    <div class="container mt-5" style="z-index: 99;">
        <div class="mx-auto text-center mt-5">
            <br>
            <p class="text-center">
              <a :href="'/about'" class="btn wrapper btn-lg rounded-pill px-5 py-2">Introduce myself <br><small>(click here)</small></a>
              <!-- <router-link :to="'about'" class="btn wrapper btn-lg rounded-pill px-5 py-2">WHO AM I ? <br><small>(click here)</small></router-link> -->
            </p>
        </div>
        <div class="space"></div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pre-h1{
    display: inline-block;
    width: 7%;
    height: 2px;
    background: rgb(44, 62, 80);;
    margin-right: .75em;
    vertical-align: middle;
}
.wrapper {
    color: #fff;
    background-image: linear-gradient(to right, #054f7d, #00a7cf, #4800cf, #5d0391, #054f7d);
    background-size: 600%;
    background-position: 0 0;
    height: 100%;
    justify-content: center;
    /* Animation */
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-name: gradients;
    padding: .25em;
}

@keyframes gradients {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 50% 0;
  }
  50% {
    background-position: 90% 0;
  }
  60% {
    background-position: 60%;
  }
  75% {
    background-position: 40%;
  }
  100% {
    background-position: 0 0;
  }
}

</style>
