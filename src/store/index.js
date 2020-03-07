import Vue from 'vue';
import Vuex from 'vuex';
import { CREATE_TASK, UPDATE_TASK } from './consts';
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
