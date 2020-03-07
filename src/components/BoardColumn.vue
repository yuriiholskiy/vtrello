<template>
  <div
    class="column bg-grey-light p-2 mr-4 text-left shadow rounded"
    draggable
    @drop="moveTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="startDragCol($event, columnIndex)"
  >
    <div class="flex items-center justify-center mb-2 font-bold">
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
        :board="board"
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
import { CREATE_TASK } from '@/store/consts';
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
export default {
  name: 'BoardColumn',
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  mixins: [movingTaskAndColMixin],
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
    startDragCol(event, fromColIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('from-col-index', fromColIndex);
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
