<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      :isDraggable="true"
      class="column bg-grey-light p-2 mr-4 text-left shadow rounded max-h-164 overflow-y-auto overflow-x-hidden"
      :transfer-data="{ type: 'column', fromColIndex: columnIndex }"
    >
      <div
        class="flex items-center justify-around font-bold"
        @dblclick="openModal"
      >
        <span>{{ column.name }}</span>
        <button
          v-if="isClearBtnShown"
          class="btn"
          @click="openTasksDeleteModal"
        >
          Clear tasks
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
          class="mt-2"
          v-model="newTask"
          @keyup.enter="createTask(column.tasks)"
        />
      </div>
    </AppDrag>
    <AppModal :isOpen="isModalOpen" @click.self="closeModal">
      <div
        class="delete-modal w-1/2 h-64 mt-16 mx-auto p-2 bg-white flex flex-col justify-between items-center"
      >
        <div>
          <h2 class="mt-2">Do you really want delete {{ deleteModalText }}?</h2>
          <p class="mt-2">It's unreversable action.</p>
        </div>
        <div>
          <button
            class="btn bg-indigo"
            @click="
              isColumnDelete
                ? removeColumn(columnIndex)
                : removeAllTask(columnIndex)
            "
          >
            Continue
          </button>
          <button class="btn ml-2 bg-red-light" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </AppModal>
  </AppDrop>
</template>

<script>
import { CREATE_TASK, REMOVE_ALL_TASKS, REMOVE_COLUMN } from '@/store/consts';
import ColumnTask from '@/components/task/ColumnTask';
import AppDrag from '@/components/reusable/AppDrag';
import AppDrop from '@/components/reusable/AppDrop';
import AppInputField from '@/components/ui/AppInputField';
import AppModal from '@/components/ui/AppModal';
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
export default {
  name: 'BoardColumn',
  mixins: [movingTaskAndColMixin],
  data() {
    return {
      newTask: '',
      isModalOpen: false,
      isColumnDelete: true
    };
  },
  computed: {
    isClearBtnShown() {
      return this.column.tasks.length;
    },
    deleteModalText() {
      return this.isColumnDelete ? 'this column' : 'this tasks';
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
      this.closeModal();
    },
    removeAllTask(colIndex) {
      this.$store.dispatch(`task/${REMOVE_ALL_TASKS}`, colIndex);
      this.closeModal();
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.isColumnDelete = true;
    },
    openTasksDeleteModal() {
      this.isColumnDelete = false;
      this.openModal();
    }
  },
  components: {
    ColumnTask,
    AppDrag,
    AppDrop,
    AppInputField,
    AppModal
  }
};
</script>

<style>
.column {
  min-width: 350px;
}
.delete-modal {
  max-width: 600px;
}
.btn {
  @apply p-2 rounded text-white bg-indigo;
}
</style>
