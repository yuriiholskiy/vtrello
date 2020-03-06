import Vue from 'vue';
import Vuex from 'vuex';

import defaultBoard, { saveStateToStorage } from '../utils';

Vue.use(Vuex);

const board =
  JSON.parse(localStorage.getItem('board')) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStateToStorage],
  state: {
    board
  },
  mutations: {},
  actions: {},
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
