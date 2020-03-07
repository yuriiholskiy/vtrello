import { MOVE_TASK, MOVE_COLUMN } from '@/store/consts';
export default {
  props: {
    board: {
      type: Object,
      required: false
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    moveTask(event, toTasks, toTaskIndex) {
      const fromColIndex = event.dataTransfer.getData('from-col-index');
      const fromTaskIndex = event.dataTransfer.getData('from-task-index');
      const fromTasks = this.board.columns[fromColIndex].tasks;

      this.$store.commit(MOVE_TASK, {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      });
    },
    moveColumn(event, toColIndex) {
      const fromColIndex = event.dataTransfer.getData('from-col-index');
      this.$store.commit(MOVE_COLUMN, {
        fromColIndex,
        toColIndex
      });
    },
    moveTaskOrColumn(event, toTasks, toColIndex, toTaskIndex) {
      const type = event.dataTransfer.getData('type');
      if (type === 'task') {
        const rightIndex =
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length;
        this.moveTask(event, toTasks, rightIndex);
      } else {
        this.moveColumn(event, toColIndex);
      }
    }
  }
};
