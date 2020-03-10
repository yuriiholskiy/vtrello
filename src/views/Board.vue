<template>
  <div class="board p-4 h-full overflow-auto">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        :column="column"
        :board="board"
        :column-index="columnIndex"
      />

      <div class="column flex">
        <input
          type="text"
          class="p-2 mr-2 flex-grow rounded"
          placeholder="New Column Name"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div
        class="task-bg pin absolute px-4"
        v-if="isTaskOpen"
        @click.self="closeTaskModal"
      >
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import { CREATE_COLUMN } from '@/store/consts';
import { mapState } from 'vuex';
import BoardColumn from '@/components/BoardColumn';
export default {
  name: 'Board',
  data() {
    return {
      newColumnName: ''
    };
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task';
    }
  },
  methods: {
    closeTaskModal() {
      this.$router.push({ name: 'board' });
    },
    createColumn() {
      this.$store.dispatch(`column/${CREATE_COLUMN}`, {
        name: this.newColumnName
      });
      this.newColumnName = '';
    }
  },
  components: {
    BoardColumn
  }
};
</script>

<style>
.board {
  background-color: rgb(0, 121, 191);
}
.task-bg {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
