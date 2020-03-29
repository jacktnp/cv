<template>
    <div>
        <div class="navbar-tool"><navbar></navbar></div>
        <intro></intro>
    </div>
</template>

<script>
import navbar from "@/components/main/navbar.vue";
import intro from "@/components/about/intro.vue";

export default {
  name: 'cover',
  components: {
    navbar, intro
  }
}
</script>
