<template>
  <div
    class="column bg-grey-light p-2 mr-4 text-left shadow rounded"
  >
    <div
      class="flex items-center justify-center mb-2 font-bold"
    >
      {{ column.name }}
    </div>
    <div class="list-reset">
      <ColumnTask
        v-for="(task, taskIndex) of column.tasks"
        :key="taskIndex"
        :task="task"
      />

      <input
        type="text"
        class="block p-2 w-full bg-transparent"
        placeholder="+ Enter new task"
      />
    </div>
  </div>
</template>

<script>
import ColumnTask from './ColumnTask';
export default {
  name: 'BoardColumn',
  props: {
    column: {
      type: Object,
      required: true
    },
    board: {
      type: Object,
      required: false
    }
  },
  components: {
    ColumnTask
  }
};
</script>

<style>
.column {
  min-width: 350px;
}
</style>
