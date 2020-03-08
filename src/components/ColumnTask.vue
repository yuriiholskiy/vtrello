<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="bg-white p-3 m-2 rounded cursor-pointer hover:bg-grey-lighter"
      :transfer-data="{
        type: 'task',
        fromColIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click="openTask"
    >
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>
      <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ task.description }}
      </p>
    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
import AppDrag from '@/components/AppDrag';
import AppDrop from '@/components/AppDrop';
export default {
  name: 'ColumnTask',
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  mixins: [movingTaskAndColMixin],
  methods: {
    openTask() {
      this.$router.push({
        name: 'task',
        params: { id: this.task.id }
      });
    }
  },
  components: {
    AppDrag,
    AppDrop
  }
};
</script>
