import Vue from 'vue';
import Vuex from 'vuex';
import {
  CREATE_TASK,
  UPDATE_TASK,
  MOVE_TASK,
  CREATE_COLUMN,
  REMOVE_COLUMN,
  MOVE_COLUMN,
  ADD_COMMENT
} from './consts';

import defaultBoard, { saveStateToStorage, uuid } from '../utils';

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard;

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
    [CREATE_COLUMN](state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      });
    },
    [REMOVE_COLUMN](state, colIndex) {
      state.board.columns.splice(colIndex, 1);
    },
    [MOVE_COLUMN](state, { fromColIndex, toColIndex }) {
      const colList = state.board.columns;
      const colToMove = colList.splice(fromColIndex, 1)[0];
      colList.splice(toColIndex, 0, colToMove);
    },
    [ADD_COMMENT](_, { task, comment }) {
      comment.id = uuid();
      task.comments.push(comment);
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
    [CREATE_COLUMN]({ commit }, { name }) {
      commit(CREATE_COLUMN, { name });
    },
    [MOVE_COLUMN]({ commit }, { fromColIndex, toColIndex }) {
      commit(MOVE_COLUMN, { fromColIndex, toColIndex });
    },
    [REMOVE_COLUMN]({ commit }, colIndex) {
      commit(REMOVE_COLUMN, colIndex);
    },
    [ADD_COMMENT]({ commit }, { task, comment }) {
      commit(ADD_COMMENT, { task, comment });
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
