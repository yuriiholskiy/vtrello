<template>
  <form class="w-full">
    <AppInputField
      type="text"
      class="text-xl bg-grey-light"
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
  </form>
</template>

<script>
import { UPDATE_TASK } from '@/store/consts';
import AppInputField from '@/components/ui/AppInputField';
export default {
  name: 'TaskUpdateForm',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateTaskProp(value, key) {
      this.$store.dispatch(`task/${UPDATE_TASK}`, {
        task: this.task,
        key,
        value
      });
    }
  },
  components: {
    AppInputField
  }
};
</script>
