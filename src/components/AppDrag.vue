<template>
  <div
    draggable
    @dragstart.self="handleDrag"
    @dragover.prevent
    @dragenter.prevent
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppDrag',
  props: {
    transferData: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDrag(event) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('payload', JSON.stringify(this.transferData));
    }
  }
};
</script>
