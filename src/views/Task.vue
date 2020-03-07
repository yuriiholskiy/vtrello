<template>
  <div
    class="task-view relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow"
  >
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        type="text"
        class="w-full p-2 mr-2 block text-xl rounded bg-grey-light"
        :value="task.name"
        @change="updateTaskProp($event.target.value, 'name')"
        @keyup.enter="updateTaskProp($event.target.value, 'name')"
      />
      <textarea
        placeholder="+ you can add description to task"
        class="relative w-full bg-grey-light px-2 border mt-2 h-64 border-none leading-normal"
        :value="task.description"
        @change="updateTaskProp($event.target.value, 'description')"
      />
    </div>
  </div>
</template>

<script>
import { UPDATE_TASK } from '@/store/consts';
import { mapGetters } from 'vuex';
export default {
  name: 'Task',
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskProp(value, key) {
      this.$store.commit(UPDATE_TASK, {
        task: this.task,
        key,
        value
      });
    }
  }
};
</script>

<style>
.task-view {
  max-width: 700px;
}
</style>
