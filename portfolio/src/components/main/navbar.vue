<template>
    <nav class="navbar navbar-expand-lg navbar-dark pt-4">
        <a class="navbar-brand d-block d-md-none" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">ABOUT ME</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/project" class="nav-link">PROJECT</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link d-none d-sm-block active">LOGO</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/skill" class="nav-link">SKILL</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/achievement" class="nav-link">ACHIEVEMENT</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link{
    /* color: #fff !important; */
    margin: 0em .35em;
    font-weight: 600;
    border-radius: .3em;
    transition: .5s;
    text-align: center;
}
.nav-link:hover, .nav-link.active{
    background: rgba(255, 255, 255, 0.911);
    color: #1488cc !important;
    transform: scale(1.05);
}
</style>