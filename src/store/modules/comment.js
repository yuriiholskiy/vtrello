import { ADD_COMMENT, DELETE_COMMENT } from '../consts';
import { uuid } from '../../utils';
const comment = {
  namespaced: true,
  mutations: {
    [ADD_COMMENT](_, { task, comment }) {
      comment.id = uuid();
      task.comments.push(comment);
    },
    [DELETE_COMMENT](_, { task, name, commentIndex }) {
      const promptDeleteComment = window.prompt(
        'To delete type a name of the comment'
      );

      if (promptDeleteComment === name) {
        task.comments.splice(commentIndex, 1);
      }
    }
  },
  actions: {
    [ADD_COMMENT]({ commit }, { task, comment }) {
      commit(ADD_COMMENT, { task, comment });
    },
    [DELETE_COMMENT]({ commit }, { task, name, commentIndex }) {
      commit(DELETE_COMMENT, { task, name, commentIndex });
    }
  }
};

export default comment;
