import { MOVE_TASK, MOVE_COLUMN } from '@/store/consts';
export default {
  props: {
    board: {
      type: Object,
      required: false
    },
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    moveTask({ fromColIndex, fromTaskIndex }) {
      const fromTasks = this.board.columns[fromColIndex].tasks;

      this.$store.dispatch(MOVE_TASK, {
        fromTasks,
        fromTaskIndex,
        toTasks: this.column.tasks,
        toTaskIndex: this.taskIndex
      });
    },
    moveColumn({ fromColIndex }) {
      this.$store.dispatch(MOVE_COLUMN, {
        fromColIndex,
        toColIndex: this.columnIndex
      });
    },
    moveTaskOrColumn(transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData);
      } else {
        this.moveColumn(transferData);
      }
    }
  }
};
