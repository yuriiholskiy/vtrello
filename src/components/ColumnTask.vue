<template>
  <div
    class="bg-white p-2 m-2 rounded"
    @click="openTask"
    draggable
    @dragstart="startDrag($event, taskIndex, columnIndex)"
  >
    <span class="w-full flex-no-shrink font-bold">
      {{ task.name }}
    </span>
    <p
      v-if="task.description"
      class="w-full flex-no-shrink mt-1 text-sm"
    >
      {{ task.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ColumnTask',
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    openTask() {
      this.$router.push({
        name: 'task',
        params: { id: this.task.id }
      });
    },
    startDrag(event, taskIndex, fromColIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('task-index', taskIndex);
      event.dataTransfer.setData(
        'from-col-index',
        fromColIndex
      );
    }
  }
};
</script>

<style></style>
