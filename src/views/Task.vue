<template>
  <div class="task-view overflow-y-auto">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <TaskUpdateForm :task="task" />
      <button
        type="button"
        class="btn mt-4 bg-indigo-dark rounded"
        @click="hideComments"
      >
        {{ hideCommentsBtnText }}
      </button>
      <transition name="fade" mode="out-in">
        <div
          class="w-full md:h-auto max-h-64 overflow-y-auto"
          v-if="isCommentShow"
        >
          <h3 class="mt-4 text-grey-darker text-xl">Comments:</h3>

          <div class="block md:flex w-full" v-if="isCommentShow">
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
export default {
  name: 'Task',
  data() {
    return {
      isCommentShow: true
    };
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    },
    hideCommentsBtnText() {
      return this.isCommentShow ? 'Hide comments' : 'Show comments';
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
    CommentAddForm
  }
};
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 mt-8 mx-auto py-4 text-left shadow;
}
.btn {
  @apply bg-blue text-white font-bold py-2 px-4 mt-1 cursor-pointer;
}

.task-view {
  max-width: 700px;
}
</style>
