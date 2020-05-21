<template>
    <div>
        <div class="navbar-tool"><navbar></navbar></div>
        <projects class="mt-5"></projects>
    </div>
</template>

<script>
import navbar from "@/components/main/navbar.vue";
import projects from "@/components/home/project.vue";

export default {
  name: 'skill',
  components: {
    navbar, projects
  }
}
</script>

<style>
.navbar-tool{
    margin: 0 auto;
    background: #0099ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #1488cc, #2b32b2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #1488cc, #2b32b2); /*W3C IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+*/
}
</style>
