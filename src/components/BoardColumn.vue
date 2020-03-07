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
        v-model="newTask"
        @keyup.enter="createTask(column.tasks)"
      />
    </div>
  </div>
</template>

<script>
import ColumnTask from './ColumnTask';
import { CREATE_TASK } from '@/store/consts';
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
    ColumnTask
  }
};
</script>

<style>
.column {
  min-width: 350px;
}
</style>
