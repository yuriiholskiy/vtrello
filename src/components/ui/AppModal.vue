<template>
  <transition name="fade" mode="out-in">
    <div class="modal pin absolute px-4 z-50" v-if="isOpen" v-on="$listeners">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
