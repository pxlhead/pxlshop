import {
  signUpUser,
  signInUser,
  signInUserRedirect,
  getSignedUser,
  signOutUser,
  uploadUserPhoto,
  getUserPhotoURL,
  deleteUserPhoto,
  reauthenticateUser
} from '@/api';
import * as types from '../mutation-types';

const state = {
  activeUser: null
};

const getters = {
  activeUser(state) {
    return state.activeUser;
  }
};

const mutations = {
  [types.SET_ACTIVE_USER](state, { user }) {
    state.activeUser = user;
  },

  [types.CLEAR_ACTIVE_USER](state) {
    state.activeUser = null;
  }
};

const actions = {
  signUpUser({ dispatch }, { email, password }) {
    return signUpUser(email, password)
      .then(() => dispatch('getUser'))
      .catch(err => dispatch('handleError', err));
  },

  signInUser({ dispatch }, { email, password }) {
    return signInUser(email, password)
      .then(() => dispatch('getUser'))
      .catch(err => dispatch('handleError', err));
  },

  signInUserRedirect({ commit, dispatch }, { method }) {
    return signInUserRedirect(method)
      .then(result => commit(types.SET_ACTIVE_USER, { user: result.user }))
      .catch(err => dispatch('handleError', err));
  },

  getUser({ commit, dispatch }) {
    return getSignedUser()
      .then(user => commit(types.SET_ACTIVE_USER, { user }))
      .catch(err => dispatch('handleError', err));
  },

  signOutUser({ commit, dispatch }) {
    return signOutUser()
      .then(() => commit(types.CLEAR_ACTIVE_USER))
      .catch(err => dispatch('handleError', err));
  },

  uploadUserPhoto({ state, dispatch }, { file }) {
    if (file.size / 1024 > 2048) {
      const message = 'Your image is too big. Maximal file size is 2MB.';
      return dispatch('handleError', { message });
    }
    return uploadUserPhoto(file, state.activeUser.uid)
      .then(() => dispatch('getUserPhotoURL'))
      .catch(err => dispatch('handleError', err));
  },

  getUserPhotoURL({ state, dispatch }) {
    return getUserPhotoURL(state.activeUser.uid)
      .then(url => dispatch('updateUserProfile', { photoURL: url }))
      .catch(err => dispatch('handleError', err));
  },

  deleteUserPhoto({ state, dispatch }) {
    return deleteUserPhoto(state.activeUser.uid)
      .catch(err => dispatch('handleError', err));
  },

  updateUserProfile({ state, dispatch }, { data }) {
    state.activeUser.updateProfile(data)
      .then(() => {
        dispatch('handleSuccess');
        dispatch('getUser');
      })
      .catch(err => dispatch('handleError', err));
  },

  updateUserEmail({ state, dispatch }, { password, email }) {
    dispatch('reauthenticateUser', { password })
      .then(() => {
        state.activeUser.updateEmail(email)
          .then(() => dispatch('handleSuccess'))
          .catch(err => dispatch('handleError', err));
      });
  },

  updateUserPassword({ state, dispatch }, { password, newPassword }) {
    dispatch('reauthenticateUser', { password })
      .then(() => {
        state.activeUser.updatePassword(newPassword)
          .then(() => dispatch('handleSuccess'))
          .catch(err => dispatch('handleError', err));
      });
  },

  deleteUser({ state, dispatch }, { password }) {
    dispatch('reauthenticateUser', { password })
      .then(() => {
        state.activeUser.delete()
          .then(() => dispatch('deleteUserPhoto'))
          .then(() => dispatch('handleSuccess', { message: 'You have just been erased' }))
          .catch(err => dispatch('handleError', err));
      });
  },

  reauthenticateUser({ dispatch, store }, { password }) {
    return reauthenticateUser(store.activeUser, password)
      .catch(err => dispatch('handleError', err));
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
