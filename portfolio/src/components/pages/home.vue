<template>
  <div class="home">
    <cover></cover>
    <about></about>
    <project></project>
    <achievement></achievement>
  </div>
</template>

<script>
import cover from "@/components/home/cover.vue";
import about from "@/components/home/about.vue";
import project from "@/components/home/project.vue";
import achievement from "@/components/home/achievement.vue";

export default {
  name: 'home',
  components: {
    cover, about, project, achievement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.space{
    width: 1px;
    height: 7.5em;
}
</style>