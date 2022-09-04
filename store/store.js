export const state = () => ({
  isValid: false,
});

export const getters = {
  getState(state) {
    return state.isValid;
  },
};

export const mutations = {
  SET_STATE(state) {
    state.isValid = !state.isValid;
  },
};
