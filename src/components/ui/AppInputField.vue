<template>
  <textarea
    v-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :value="value"
    v-on="combineListeners"
    class="relative w-full h-64 pl-1 bg-grey-light py-2 border rounded mt-2 h-32 border-none leading-normal outline-none"
  >
  </textarea>
  <input
    v-else-if="fieldType === 'input'"
    v-bind="$attrs"
    :value="value"
    v-on="combineListeners"
    class="w-full py-2 pl-1 block rounded bg-grey-lighten text-sm outline-none"
  />
</template>

<script>
export default {
  name: 'AppFields',
  props: {
    value: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: 'input'
    }
  },
  computed: {
    combineListeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value)
      };
    }
  }
};
</script>
