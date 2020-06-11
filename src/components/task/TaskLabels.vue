<template>
  <div>
    <span
      v-for="label in task.labels"
      :key="label.name"
      class="color-label"
      :style="{ 'background-color': label.color }"
      :title="label.name"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: 'TaskLabels',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.color-label {
  display: inline-block;
  width: 50px;
  height: 10px;
  border-radius: 5px;
}
.color-label:not(:first-child) {
  margin-left: 5px;
}
</style>
