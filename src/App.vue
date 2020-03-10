<template>
  <div id="app">
    <AppToolbar title="vtrello" />
    <router-view />
  </div>
</template>

<script>
import AppToolbar from '@/components/ui/AppToolbar';
export default {
  name: 'App',
  components: {
    AppToolbar
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s opacity;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
