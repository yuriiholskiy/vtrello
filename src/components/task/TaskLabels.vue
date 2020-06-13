<template>
  <div>
    <span
      v-for="label in task.labels"
      v-tooltip.top="label.name"
      :key="label.name"
      class="color-label"
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
      type: Boolean
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
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: indigo;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: indigo;
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 8px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
