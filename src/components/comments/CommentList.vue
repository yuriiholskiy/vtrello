<template>
  <ul class="comments mt-2 list-reset md:w-1/2 w-full">
    <CommentItem
      v-for="comment of task.comments"
      :comment="comment"
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
