<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
/* width */
::-webkit-scrollbar {
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dae1e7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
