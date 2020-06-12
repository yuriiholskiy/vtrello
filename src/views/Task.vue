<template>
  <div class="task-view min-h-100 overflow-y-auto rounded-sm">
    <div class="flex flex-col flex-grow items-start px-4">
      <TaskLabels :task="task" />
      <TaskUpdateForm :task="task" class="mt-2" />
      <div class="mt-4">
        <button
          type="button"
          class="btn bg-indigo rounded"
          @click="hideComments"
        >
          {{ hideCommentsBtnText }}
        </button>
        <button
          type="button"
          class="btn ml-2 bg-indigo rounded"
          @click="isLabelsMenuShow = !isLabelsMenuShow"
        >
          Add labels
        </button>
        <TaskLabels
          :task="{ labels: filteredLabels, task }"
          :isLabelsMenuShow="isLabelsMenuShow"
          v-if="isLabelsMenuShow"
          class="mt-4"
        />
      </div>
      <transition name="fade" mode="out-in">
        <div class="w-full md:h-auto" v-if="isCommentShow">
          <h3 class="mt-4 text-grey-darker text-xl">Comments:</h3>

          <div class="block w-full" v-if="isCommentShow">
            <CommentList :task="task" v-if="task.comments.length" />
            <CommentAddForm :task="task" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskUpdateForm from '@/components/task/TaskUpdateForm';
import CommentList from '@/components/comments/CommentList';
import CommentAddForm from '@/components/comments/CommentAddForm';
import TaskLabels from '@/components/task/TaskLabels';
import labels from '@/utils/labels';
export default {
  name: 'Task',
  data() {
    return {
      isCommentShow: false,
      isLabelsMenuShow: false,
      labels
    };
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    },
    hideCommentsBtnText() {
      return this.isCommentShow ? 'Hide comments' : 'Show comments';
    },
    filteredLabels() {
      return this.labels.filter((l) =>
        this.task.labels.every((l1) => l.name !== l1.name)
      );
    }
  },
  methods: {
    hideComments() {
      this.isCommentShow = !this.isCommentShow;
    }
  },
  components: {
    TaskUpdateForm,
    CommentList,
    CommentAddForm,
    TaskLabels
  }
};
</script>

<style>
.task-view {
  @apply h-100 relative flex flex-row bg-white mx-4 mt-32 mx-auto py-4 text-left shadow;
}
.btn {
  @apply bg-blue text-white font-bold py-2 px-4 mt-1 cursor-pointer;
}

.task-view {
  max-width: 800px;
}
</style>
