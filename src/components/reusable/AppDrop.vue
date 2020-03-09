<template>
  <div @drop.stop="handleDrop" @dragover.prevent @dragenter.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppDrop',
  methods: {
    handleDrop(event) {
      console.log(event);
      const transferData = JSON.parse(event.dataTransfer.getData('payload'));
      this.$emit('drop', transferData);
    }
  }
};
</script>
