const state = {
  error: null,
};
const getters = {
  getError: (state) => state.error,
};

const mutations = {
  setError(state, error) {
    state.error = error;
  },
  clearError(state) {
    state.error = null;
  },
};

export default { state, getters, mutations };
