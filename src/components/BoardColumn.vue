<template>
  <div
    class="column bg-grey-light p-2 mr-4 text-left shadow rounded"
    draggable
    @drop="
      moveTaskOrColumn($event, column.tasks, columnIndex)
    "
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="startDragCol($event, columnIndex)"
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
        :tasks="column.tasks"
        :task="task"
        :moveTaskOrColumn="moveTaskOrColumn"
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
import {
  CREATE_TASK,
  MOVE_TASK,
  MOVE_COLUMN
} from '@/store/consts';
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
    moveTask(event, toTasks, toTaskIndex) {
      const fromColIndex = event.dataTransfer.getData(
        'from-col-index'
      );
      const fromTaskIndex = event.dataTransfer.getData(
        'from-task-index'
      );
      const fromTasks = this.board.columns[fromColIndex]
        .tasks;

      this.$store.commit(MOVE_TASK, {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      });
    },
    moveColumn(event, toColIndex) {
      const fromColIndex = event.dataTransfer.getData(
        'from-col-index'
      );
      this.$store.commit(MOVE_COLUMN, {
        fromColIndex,
        toColIndex
      });
    },
    moveTaskOrColumn(
      event,
      toTasks,
      toColIndex,
      toTaskIndex
    ) {
      const type = event.dataTransfer.getData('type');
      if (type === 'task') {
        const rightIndex =
          toTaskIndex !== undefined
            ? toTaskIndex
            : toTasks.length;
        this.moveTask(event, toTasks, rightIndex);
      } else {
        this.moveColumn(event, toColIndex);
      }
    },
    startDragCol(event, fromColIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData(
        'from-col-index',
        fromColIndex
      );
      event.dataTransfer.setData('type', 'column');
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
