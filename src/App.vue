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
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: rgb(0 0 0 / 0.2);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(255 255 255 / 0.8);
  border-radius: 5px;
}
</style>
