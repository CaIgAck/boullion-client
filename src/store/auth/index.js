import { loginRequest } from "../../helpers/api/auth";
import { getToken, removeToken, saveToken } from "../../helpers/jwtHelper";

const state = {
  token: getToken(),
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
  isLogin: (state) => {
    if (state.token) return state.token;
  },
};
const actions = {
  async login(context) {
    try {
      const login = context.getters.login;
      const response = await loginRequest({ data: login });
      context.commit("setLogin", { token: response.data.token });
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  setLogin(state, token) {
    saveToken(token);
    state.token = token;
    state.error = false;
  },
  setDataLogin(state, { fieldName, newValue }) {
    state.login[fieldName] = newValue;
  },
  logout(state) {
    removeToken();
    state.token = null;
    state.login = {
      email: null,
      password: null,
    };
  },
};

export default { state, getters, actions, mutations };
