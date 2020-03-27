<template>
    <div class="container mt-5" style="z-index: 99;">
        <div class="mx-auto text-center mt-5">
            <br>
            <p class="text-center">
                <a href="#" class="btn wrapper btn-lg rounded-pill px-5 py-2">WHO AM I ? <br><small>(click here)</small></a>
            </p>
        </div>
        <div class="space"></div>
        <h1 class="text-center" style="align-items:center;"><span class="pre-h1"></span>SKILLS & PROJECT</h1>
        <div class="text-center"><small>All project based on HTML CSS Javascript and Bootstrap Framework.</small></div>
        <div class="row my-5">
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img class="card-img-top" src="https://i.imgur.com/HlYwOES.jpg">
                    <div class="card-body text-center">
                        <h5 class="card-title">JO!NTY</h5>
                        <a href="#" class="btn btn-outline-primary btn-sm rounded-lg w-50">view</a>
                    </div>
                    <div class="card-footer text-center">
                        <small class="badge badge-pill badge-secondary">MySQL</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="https://i.imgur.com/FqcIOh1.jpg">
                    <div class="card-body text-center">
                        <h5 class="card-title">Nakhonpratom Travel</h5>
                        <a href="#" class="btn btn-outline-primary btn-sm rounded-lg w-50">view</a>
                    </div>
                    <div class="card-footer text-center">
                        <small class="badge badge-pill badge-secondary">CSS Animation</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="https://i.imgur.com/n3zWcSJ.png">
                    <div class="card-body text-center">
                        <h5 class="card-title">Loofer</h5>
                        <a href="#" class="btn btn-outline-primary btn-sm rounded-lg w-50">view</a>
                    </div>
                    <div class="card-footer text-center">
                        <small class="badge badge-pill badge-secondary">Firebase</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="https://i.imgur.com/CQLyv8O.png">
                    <div class="card-body text-center">
                        <h5 class="card-title">Graphico</h5>
                        <a href="#" class="btn btn-outline-primary btn-sm rounded-lg w-50">view</a>
                    </div>
                    <div class="card-footer text-center">
                        <small class="badge badge-pill badge-secondary">HTML</small>
                        <small class="badge badge-pill badge-secondary">CSS</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="http://base.jacktnp.com/workspace/assets/dormlab.png">
                    <div class="card-body text-center">
                        <h5 class="card-title">Dormlab</h5>
                        <a href="#" class="btn btn-outline-primary btn-sm rounded-lg w-50">view</a>
                    </div>
                    <div class="card-footer text-center">
                        <small class="badge badge-pill badge-secondary">Django</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
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
.space{
    width: 1px;
    height: 10em;
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
