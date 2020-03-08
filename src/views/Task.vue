<template>
  <div class="task-view overflow-y-auto">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <AppInputField
        type="text"
        class="text-xl"
        :value="task.name"
        @change="updateTaskProp($event.target.value, 'name')"
        @keyup.enter="updateTaskProp($event.target.value, 'name')"
      />
      <AppInputField
        field-type="textarea"
        :value="task.description"
        placeholder="+ you can add a description"
        @change="updateTaskProp($event.target.value, 'description')"
        @keyup.enter="updateTaskProp($event.target.value, 'description')"
      />
      <template>
        <h3 class="mt-4 text-grey-darker text-xl">Comments:</h3>
        <div class="block md:flex w-full">
          <ul
            class="comments mt-2 list-reset md:w-1/2 w-full"
            v-if="task.comments.length"
          >
            <CommentItem
              v-for="comment of task.comments"
              :comment="comment"
              :key="comment.id"
            />
          </ul>
          <form class="md:w-1/2 mt-2 w-full" @submit.prevent="addComment">
            <AppInputField
              v-model="comment.author"
              type="text"
              placeholder="who you are?"
            />
            <AppInputField
              v-model="comment.content"
              field-type="textarea"
              class="h-16"
              placeholder="+ you can add a comment"
            />
            <input
              class="btn hover:bg-blue-dark"
              type="submit"
              value="+ add comment"
            />
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { UPDATE_TASK, ADD_COMMENT } from '@/store/consts';
import { mapGetters } from 'vuex';
import AppInputField from '@/components/AppInputField';
import CommentItem from '@/components/CommentItem';
export default {
  name: 'Task',
  data() {
    return {
      comment: {
        author: '',
        content: ''
      }
    };
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    createFreshComment() {
      return {
        author: '',
        content: ''
      };
    },
    updateTaskProp(value, key) {
      this.$store.dispatch(UPDATE_TASK, {
        task: this.task,
        key,
        value
      });
    },
    addComment() {
      const comment = {
        author: this.comment.author,
        content: this.comment.content
      };
      this.$store.dispatch(ADD_COMMENT, { task: this.task, comment });
      this.comment = this.createFreshComment();
    }
  },
  components: {
    AppInputField,
    CommentItem
  }
};
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 mt-8 mx-auto py-4 text-left rounded shadow;
}
.btn {
  @apply bg-blue text-white font-bold py-2 px-4 rounded mt-1;
}

.task-view {
  max-width: 700px;
}
</style>
