import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import task from './modules/task';
import column from './modules/column';
import comment from './modules/comment';

import defaultBoard, { saveStateToStorage } from '../utils';

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStateToStorage],
  modules: {
    task,
    column,
    comment
  },
  state: {
    board
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
