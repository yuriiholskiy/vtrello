<template>
  <ul class="comments mt-2 list-reset w-full">
    <CommentItem
      v-for="(comment, commentIndex) of task.comments"
      :comment="comment"
      :comment-index="commentIndex"
      :task="task"
      :key="comment.id"
    />
  </ul>
</template>

<script>
import CommentItem from '@/components/comments/CommentItem';
export default {
  name: 'CommentList',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  components: {
    CommentItem
  }
};
</script>
