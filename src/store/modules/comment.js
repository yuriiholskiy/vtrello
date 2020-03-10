import { ADD_COMMENT } from '../consts';
import { uuid } from '../../utils';
const comment = {
  namespaced: true,
  mutations: {
    [ADD_COMMENT](_, { task, comment }) {
      comment.id = uuid();
      task.comments.push(comment);
    }
  },
  actions: {
    [ADD_COMMENT]({ commit }, { task, comment }) {
      commit(ADD_COMMENT, { task, comment });
    }
  }
};

export default comment;
