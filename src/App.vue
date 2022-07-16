<template>
  <div class="app">
    <Navbar />
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/PagesComponents/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Concert One";
}
</style>
