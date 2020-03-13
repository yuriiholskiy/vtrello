<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="p-3 m-2 rounded cursor-pointer hover:bg-grey-lighter"
      :class="classes"
      :transfer-data="{
        type: 'task',
        fromColIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click="openTask"
    >
      <div class="w-full flex justify-between font-bold">
        <p>{{ task.name }}</p>
        <span class="text-sm" v-if="commentsCount > 0"
          >{{ commentsCount }} comments</span
        >
      </div>
      <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ task.description }}
      </p>
    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTaskAndColMixin from '@/mixins/movingTaskAndColMixin';
import AppDrag from '@/components/reusable/AppDrag';
import AppDrop from '@/components/reusable/AppDrop';
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
    }
  },
  mixins: [movingTaskAndColMixin],
  computed: {
    classes() {
      return {
        'text-grey-lighter bg-red-light hover:bg-red': this.isTodoColumn,
        'text-grey-lighter bg-green hover:bg-green-light': this.isDoneColumn,
        'text-grey-lighter bg-orange hover:bg-orange-light': this
          .isProgressColumn,
        [this.color]: true
      };
    },
    commentsCount() {
      return this.task.comments.length;
    },
    isTodoColumn() {
      return this.column.name.toLowerCase().includes('todo');
    },
    isDoneColumn() {
      return this.column.name.toLowerCase().includes('done');
    },
    isProgressColumn() {
      return this.column.name.toLowerCase().includes('progress');
    },
    isColorExist() {
      return this.column.color || 'white';
    },
    color() {
      return `bg-${this.isColorExist} hover:bg-${this.isColorExist}-light`;
    }
  },
  methods: {
    openTask() {
      this.$router.push({
        name: 'task',
        params: { id: this.task.id }
      });
    }
  },
  components: {
    AppDrag,
    AppDrop
  }
};
</script>
