<template>
  <div class="bg-white p-2 m-2 rounded" @click="openTask">
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
    }
  },
  methods: {
    openTask() {
      this.$router.push({
        name: 'task',
        params: { id: this.task.id }
      });
    }
  }
};
</script>

<style></style>
