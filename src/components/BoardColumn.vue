<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="column bg-grey-light p-2 mr-4 text-left shadow rounded max-h-128 overflow-y-auto"
      :transfer-data="{ type: 'column', fromColIndex: columnIndex }"
    >
      <div
        class="flex items-center justify-around font-bold"
        @dblclick="removeColumn(columnIndex)"
      >
        <span>{{ column.name }}</span>
        <button
          v-if="isClearBtnShown"
          class="p-2 text-white bg-indigo rounded"
          @click="removeAllTask(columnIndex)"
        >
          Clear task
        </button>
      </div>
      <div class="list-reset">
        <ColumnTask
          v-for="(task, taskIndex) of column.tasks"
          :key="taskIndex"
          :task-index="taskIndex"
          :column-index="columnIndex"
          :column="column"
          :task="task"
          :board="board"
        />

        <AppInputField
          field-type="input"
          placeholder="+ Enter new task"
          v-model="newTask"
          @keyup.enter="createTask(column.tasks)"
        />
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
import { CREATE_TASK, REMOVE_ALL_TASKS, REMOVE_COLUMN } from '@/store/consts';
import ColumnTask from '@/components/task/ColumnTask';
import AppDrag from '@/components/reusable/AppDrag';
import AppDrop from '@/components/reusable/AppDrop';
import AppInputField from '@/components/ui/AppInputField';
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
export default {
  name: 'BoardColumn',
  mixins: [movingTaskAndColMixin],
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    isClearBtnShown() {
      return this.column.tasks.length;
    }
  },
  methods: {
    createTask(tasks) {
      this.$store.dispatch(`task/${CREATE_TASK}`, {
        tasks,
        name: this.newTask
      });
      this.newTask = '';
    },
    removeColumn(colIndex) {
      this.$store.dispatch(`column/${REMOVE_COLUMN}`, colIndex);
    },
    removeAllTask(colIndex) {
      this.$store.dispatch(`task/${REMOVE_ALL_TASKS}`, colIndex);
    }
  },
  components: {
    ColumnTask,
    AppDrag,
    AppDrop,
    AppInputField
  }
};
</script>

<style>
.column {
  min-width: 350px;
}
</style>
