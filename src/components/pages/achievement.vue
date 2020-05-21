<template>
    <div>
        <div class="navbar-tool"><navbar></navbar></div>
        <achievements class="mt-5"></achievements>
    </div>
</template>

<script>
import navbar from "@/components/main/navbar.vue";
import achievements from "@/components/home/achievement.vue";

export default {
  name: 'achievement',
  components: {
    navbar, achievements
  }
}
</script>

<style>

</style>
