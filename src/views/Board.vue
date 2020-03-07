<template>
  <div
    class="board p-4 bg-orange-light h-full overflow-auto"
  >
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        :column="column"
        :board="board"
        :columnIndex="columnIndex"
      />

      <div class="column flex">
        <input
          type="text"
          class="p-2 mr-2 flex-grow rounded"
          placeholder="New Column Name"
        />
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div
        class="task-bg pin absolute"
        v-if="isTaskOpen"
        @click.self="closeTaskModal"
      >
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BoardColumn from '@/components/BoardColumn';
export default {
  name: 'Board',
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task';
    }
  },
  methods: {
    closeTaskModal() {
      this.$router.push({ name: 'board' });
    }
  },
  components: {
    BoardColumn
  }
};
</script>

<style>
.task-bg {
  background-color: rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s opacity;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
