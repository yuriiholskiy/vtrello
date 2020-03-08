<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="column bg-grey-light p-2 mr-4 text-left shadow rounded max-h-128 overflow-y-auto"
      :transfer-data="{ type: 'column', fromColIndex: columnIndex }"
    >
      <div class="flex items-center justify-center mb-2 font-bold">
        {{ column.name }}
      </div>
      <div class="list-reset">
        <ColumnTask
          v-for="(task, taskIndex) of column.tasks"
          :key="taskIndex"
          :task-index="taskIndex"
          :column-index="columnIndex"
          :column="column"
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
    </AppDrag>
  </AppDrop>
</template>

<script>
import { CREATE_TASK } from '@/store/consts';
import ColumnTask from '@/components/ColumnTask';
import AppDrag from '@/components/AppDrag';
import AppDrop from '@/components/AppDrop';
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
export default {
  name: 'BoardColumn',
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
    }
  },
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  }
};
</script>

<style>
.column {
  min-width: 350px;
}
</style>
