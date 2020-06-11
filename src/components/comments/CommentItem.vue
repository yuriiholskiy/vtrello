<template>
  <li>
    <div class="p-2">
      <div class="comment">
        <div>
          <span class="author">
            {{ comment.author }}
          </span>
          <span class="inline-flex px-2">{{ comment.content }}</span>
        </div>
        <span
          class="text-xl cursor-pointer"
          @click="deleteComment(comment.author)"
          >&times;</span
        >
      </div>
    </div>
  </li>
</template>

<script>
import { DELETE_COMMENT } from '@/store/consts';
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    },
    commentIndex: {
      type: Number,
      required: true
    },
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteComment(name) {
      this.$store.dispatch(`comment/${DELETE_COMMENT}`, {
        task: this.task,
        name,
        commentIndex: this.commentIndex
      });
    }
  }
};
</script>

<style>
.comment {
  @apply inline-flex items-center justify-between w-full bg-white leading-none rounded-full p-2 text-purple text-sm shadow-md;
}
.author {
  @apply inline-flex bg-indigo text-white rounded-full h-6 px-3 justify-center items-center;
}
</style>
