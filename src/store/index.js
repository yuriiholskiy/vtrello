import Vue from 'vue';
import Vuex from 'vuex';
import {
  CREATE_TASK,
  UPDATE_TASK,
  MOVE_TASK,
  MOVE_COLUMN
} from './consts';

import defaultBoard, {
  saveStateToStorage,
  uuid
} from '../utils';

Vue.use(Vuex);

const board =
  JSON.parse(localStorage.getItem('board')) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStateToStorage],
  state: {
    board
  },
  mutations: {
    [CREATE_TASK](_, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      });
    },
    [UPDATE_TASK](_, { task, key, value }) {
      Vue.set(task, key, value);
    },
    [MOVE_TASK](
      _,
      { fromTasks, toTasks, fromTaskIndex, toTaskIndex }
    ) {
      const taskToMove = fromTasks.splice(
        fromTaskIndex,
        1
      )[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    [MOVE_COLUMN](state, { fromColIndex, toColIndex }) {
      const colList = state.board.columns;
      const colToMove = colList.splice(fromColIndex, 1)[0];
      colList.splice(toColIndex, 0, colToMove);
    }
  },
  getters: {
    getTask(state) {
      return (id) => {
        for (const col of state.board.columns) {
          for (const task of col.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    }
  }
});
