<template>
  <li>
    <div class="p-2">
      <div class="comment">
        <span class="author">
          {{ comment.author }}
        </span>
        <span class="inline-flex px-2">{{ comment.content }}</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.comment {
  @apply inline-flex items-center bg-white leading-none rounded-full p-2 text-purple text-sm shadow-md;
}
.author {
  @apply inline-flex bg-indigo text-white rounded-full h-6 px-3 justify-center items-center;
}
</style>
