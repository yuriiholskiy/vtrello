<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="p-3 mt-2 rounded cursor-pointer hover:bg-grey-lighter"
      :class="classes"
      :transfer-data="{
        type: 'task',
        fromColIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click="openTask"
    >
      <TaskLabels :task="task" :in-task="true" />
      <div class="w-full flex justify-between font-bold mt-2">
        <p>{{ task.name }}</p>
        <span class="text-sm flex align-center" v-if="commentsCount > 0">
          {{ commentsCount }}
          <svg
            class="h-4 w-4 fill-current ml-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <g>
              <path
                d="M30.316,24.559l-1.799-4.914c0.568-1.586,0.856-3.25,0.856-4.957C29.375,6.589,22.786,0,14.688,0C6.589,0,0,6.589,0,14.688   s6.589,14.688,14.688,14.688c2.931,0,5.812-0.894,8.233-2.532l3.611,1.414c0.463,0.182,0.919,0.274,1.354,0.274   c0.903,0,1.703-0.402,2.192-1.104C30.395,26.979,30.845,26.005,30.316,24.559z M27.888,26.532c-0.179,0-0.389-0.044-0.624-0.138   l-4.639-1.815c-2.174,1.746-4.931,2.797-7.937,2.797C7.68,27.375,2,21.695,2,14.688C2,7.681,7.68,2,14.688,2   c7.007,0,12.688,5.68,12.688,12.688c0,1.75-0.354,3.417-0.995,4.934l2.059,5.625C28.73,26.042,28.484,26.532,27.888,26.532z"
              />
              <circle cx="20.375" cy="14.687" r="1.625" />
              <circle cx="14.375" cy="14.687" r="1.625" />
              <circle cx="8.375" cy="14.687" r="1.625" />
            </g>
          </svg>
        </span>
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
import TaskLabels from '@/components/task/TaskLabels';
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
    AppDrop,
    TaskLabels
  }
};
</script>
