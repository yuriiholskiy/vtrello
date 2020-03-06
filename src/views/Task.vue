<template>
  <div
    class="task-view relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow"
  >
    <div
      class="flex flex-col flex-grow items-start justify-between px-4"
    >
      {{ task.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Task',
  computed: {
    ...mapGetters(['getTask']),
    task() {
      const id = this.$route.params.id;
      return this.getTask(id);
    }
  }
};
</script>

<style>
.task-view {
  max-width: 700px;
}
</style>
