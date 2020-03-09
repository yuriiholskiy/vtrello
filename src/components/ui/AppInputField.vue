<template>
  <textarea
    v-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :value="value"
    v-on="combineListeners"
    class="relative w-full bg-grey-light px-2 border rounded mt-2 h-32 border-none leading-normal"
  >
  </textarea>
  <input
    v-else-if="fieldType === 'input'"
    v-bind="$attrs"
    :value="value"
    v-on="combineListeners"
    class="w-full p-2 mr-2 block rounded bg-grey-light text-sm"
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
