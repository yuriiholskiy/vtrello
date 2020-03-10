import { CREATE_COLUMN, MOVE_COLUMN, REMOVE_COLUMN } from '../consts';
const column = {
  namespaced: true,
  mutations: {
    [CREATE_COLUMN](_, { name, rootState }) {
      rootState.board.columns.push({
        name,
        tasks: []
      });
    },
    [REMOVE_COLUMN](_, { colIndex, rootState }) {
      rootState.board.columns.splice(colIndex, 1);
    },
    [MOVE_COLUMN](_, { fromColIndex, toColIndex, rootState }) {
      const colList = rootState.board.columns;
      const colToMove = colList.splice(fromColIndex, 1)[0];
      colList.splice(toColIndex, 0, colToMove);
    }
  },
  actions: {
    [CREATE_COLUMN]({ commit, rootState }, { name }) {
      commit(CREATE_COLUMN, { name, rootState });
    },
    [MOVE_COLUMN]({ commit, rootState }, { fromColIndex, toColIndex }) {
      commit(MOVE_COLUMN, { fromColIndex, toColIndex, rootState });
    },
    [REMOVE_COLUMN]({ commit, rootState }, colIndex) {
      commit(REMOVE_COLUMN, { colIndex, rootState });
    }
  }
};
export default column;
