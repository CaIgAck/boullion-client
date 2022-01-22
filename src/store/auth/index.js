import { loginRequest } from "../../helpers/api/auth";

const state = {
  login: {
    email: null,
    password: null,
  },
  register: {
    userName: null,
    email: null,
    avatar: null,
    role: null,
    category: null,
    survey: null,
  },
  error: null,
};
const getters = {
  login: (state) => state.login,
};
const actions = {
  async login(context) {
    try {
      const login = context.getters.login;
      const response = await loginRequest({ data: login });
      context.commit("setLogin", response.data.token);
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  setLogin(state, token) {
    localStorage.setItem("token", token);
    state.error = false;
  },
};

export default { state, getters, actions, mutations };
