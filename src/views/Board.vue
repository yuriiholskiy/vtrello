<template>
  <div class="board min-h-with-toolbar overflow-y-hidden overflow-x-auto">
    <div class="flex flex-row items-start m-4 mb-0">
      <BoardColumn
        v-for="(column, columnIndex) of board.columns"
        :key="columnIndex"
        :column="column"
        :board="board"
        :column-index="columnIndex"
      />

      <div class="column flex">
        <AppInputField
          field-type="input"
          class="p-2 mr-2 flex-grow rounded"
          placeholder="New Column Name"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <AppModal :isOpen="isTaskOpen" @click.self="closeTaskModal">
      <router-view />
    </AppModal>
  </div>
</template>

<script>
// eslint-disable-next-line
import { CREATE_COLUMN } from '@/store/consts';
import { mapState } from 'vuex';
import AppModal from '@/components/ui/AppModal';
import BoardColumn from '@/components/BoardColumn';
import AppInputField from '@/components/ui/AppInputField';
export default {
  name: 'Board',
  data() {
    return {
      newColumnName: ''
    };
  },
  created() {
    const handler = (event) => {
      if (event.key === 'Escape' && this.isTaskOpen) {
        this.closeTaskModal();
      }
    };
    document.addEventListener('keydown', handler);
    this.$once('hook:beforeDestroy', handler);
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
      const hashTagIndex = this.newColumnName.indexOf('#');
      let name = '';
      const colorType = this.newColumnName.slice(hashTagIndex + 1);

      if (hashTagIndex !== -1) {
        name = this.newColumnName.slice(0, hashTagIndex);
      } else {
        name = this.newColumnName;
      }
      const color = hashTagIndex !== -1 ? colorType : 'white';
      this.$store.dispatch(`column/${CREATE_COLUMN}`, {
        name,
        color
      });
      this.newColumnName = '';
    }
  },
  components: {
    AppModal,
    BoardColumn,
    AppInputField
  }
};
</script>

<style>
.board {
  background-color: rgb(0, 121, 191);
}
</style>
