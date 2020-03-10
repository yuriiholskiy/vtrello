import Vue from 'vue';
import {
  CREATE_TASK,
  UPDATE_TASK,
  MOVE_TASK,
  REMOVE_ALL_TASKS
} from '../consts';
import { uuid } from '../../utils';
const task = {
  namespaced: true,
  mutations: {
    [CREATE_TASK](_, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: '',
        comments: []
      });
    },
    [UPDATE_TASK](_, { task, key, value }) {
      Vue.set(task, key, value);
    },
    [MOVE_TASK](_, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    [REMOVE_ALL_TASKS](_, { colIndex, rootState }) {
      const column = rootState.board.columns[colIndex];
      column.tasks.splice(0, column.tasks.length);
    }
  },
  actions: {
    [CREATE_TASK]({ commit }, { tasks, name }) {
      commit(CREATE_TASK, { tasks, name });
    },
    [UPDATE_TASK]({ commit }, { task, key, value }) {
      commit(UPDATE_TASK, { task, key, value });
    },
    [MOVE_TASK](
      { commit },
      { fromTasks, toTasks, fromTaskIndex, toTaskIndex }
    ) {
      commit(MOVE_TASK, { fromTasks, toTasks, fromTaskIndex, toTaskIndex });
    },
    [REMOVE_ALL_TASKS]({ commit, rootState }, colIndex) {
      commit(REMOVE_ALL_TASKS, { colIndex, rootState });
    }
  }
};

export default task;
