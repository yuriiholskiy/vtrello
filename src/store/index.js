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
  actions: {}
});
