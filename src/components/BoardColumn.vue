<template>
  <div
    class="column bg-grey-light p-2 mr-4 text-left shadow rounded"
    @drop="moveTask($event, column.tasks)"
    @dragover.prevent
    @dragenter.prevent
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
        :taskIndex="taskIndex"
        :columnIndex="columnIndex"
        :task="task"
      />

      <input
        type="text"
        class="block p-2 w-full rounded bg-grey-lightest"
        placeholder="+ Enter new task"
        v-model="newTask"
        @keyup.enter="createTask(column.tasks)"
      />
    </div>
  </div>
</template>

<script>
import ColumnTask from './ColumnTask';
import { CREATE_TASK, MOVE_TASK } from '@/store/consts';
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
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    createTask(tasks) {
      this.$store.commit(CREATE_TASK, {
        tasks,
        name: this.newTask
      });
      this.newTask = '';
    },
    moveTask(event, toTasks) {
      const fromColIndex = event.dataTransfer.getData(
        'from-col-index'
      );
      const taskIndex = event.dataTransfer.getData(
        'task-index'
      );
      const fromTasks = this.board.columns[fromColIndex]
        .tasks;

      this.$store.commit(MOVE_TASK, {
        fromTasks,
        toTasks,
        taskIndex
      });
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
