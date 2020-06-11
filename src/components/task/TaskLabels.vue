<template>
  <div>
    <span
      v-for="label in task.labels"
      :key="label.name"
      class="color-label"
      :class="{ 'in-task': inTask }"
      :style="{ 'background-color': label.color }"
      :title="label.name"
      @click="manipulateLabel(label, $event)"
    />
  </div>
</template>

<script>
import { ADD_LABEL, REMOVE_LABEL } from '@/store/consts';
export default {
  name: 'TaskLabels',
  props: {
    task: {
      type: Object,
      required: true
    },
    isLabelsMenuShow: {
      type: Boolean
    },
    inTask: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    manipulateLabel(label, e) {
      if (this.isLabelsMenuShow) {
        this.$store.dispatch(`task/${ADD_LABEL}`, {
          task: this.task.task,
          label
        });
      } else {
        if (e.target.classList.contains('in-task')) return;
        this.$store.dispatch(`task/${REMOVE_LABEL}`, {
          task: this.task,
          label
        });
      }
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
  cursor: pointer;
}
.color-label:not(:first-child) {
  margin-left: 5px;
}
</style>
