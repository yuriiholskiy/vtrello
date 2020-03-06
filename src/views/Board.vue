<template>
  <div class="board p-4 bg-teal-dark h-full overflow-auto">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        :column="column"
        :board="board"
      />

      <div class="column flex">
        <input
          type="text"
          class="p-2 mr-2 flex-grow"
          placeholder="New Column Name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BoardColumn from '@/components/BoardColumn';
export default {
  name: 'Board',
  computed: {
    ...mapState(['board'])
  },
  components: {
    BoardColumn
  }
};
</script>
