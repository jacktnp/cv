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
  name: 'project',
  components: {
    navbar, projects
  }
}
</script>
