<template>
  <form class="my-2 w-full" @submit.prevent="addComment">
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
      class="btn rounded"
      type="submit"
      value="+ add comment"
      :class="{
        'opacity-50 cursor-not-allowed': isCommentBtnDisabled
      }"
      :disabled="isCommentBtnDisabled"
    />
  </form>
</template>

<script>
import { ADD_COMMENT } from '@/store/consts';
import AppInputField from '@/components/ui/AppInputField';
export default {
  name: 'CommentAddForm',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: {
        author: '',
        content: ''
      }
    };
  },
  computed: {
    isCommentBtnDisabled() {
      return !(this.comment.author && this.comment.content);
    }
  },
  methods: {
    createFreshComment() {
      return {
        author: '',
        content: ''
      };
    },
    addComment() {
      const comment = {
        author: this.comment.author,
        content: this.comment.content
      };
      this.$store.dispatch(`comment/${ADD_COMMENT}`, {
        task: this.task,
        comment
      });
      this.comment = this.createFreshComment();
    }
  },
  components: {
    AppInputField
  }
};
</script>
