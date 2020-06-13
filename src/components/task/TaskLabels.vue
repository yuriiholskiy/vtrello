<template>
  <div>
    <template v-if="withName">
      <div
        v-for="label in task.labels"
        :key="label.name"
        class="color-label color-label-with-name"
        :style="{ 'background-color': label.color }"
        :title="label.name"
        @click="manipulateLabel(label)"
      >
        {{ label.name }}
      </div>
    </template>
    <span
      v-else
      v-for="label in task.labels"
      :key="label.name"
      class="color-label color-label-size"
      :style="{ 'background-color': label.color }"
      :title="label.name"
      @click="manipulateLabel(label)"
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
      type: Boolean,
      required: false
    },
    withName: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    manipulateLabel(label) {
      if (this.isLabelsMenuShow) {
        this.$store.dispatch(`task/${ADD_LABEL}`, {
          task: this.task.task,
          label
        });
      } else {
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
.color-label-size {
  width: 50px;
  height: 10px;
}
.color-label {
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
}
.color-label:not(:first-child) {
  margin-left: 5px;
}
.color-label-with-name {
  display: inline-block;
  padding: 0.4rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
</style>
