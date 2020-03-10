<template>
  <header class="w-full bg-indigo-darker py-3 text-xl text-white">
    {{ title }}
  </header>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
};
</script>
<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
