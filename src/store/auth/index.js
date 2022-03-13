import { loginRequest } from "../../helpers/api/auth";
import router from "../../router";
import { getToken, saveToken } from "../../helpers/jwtHelper";

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
      context.commit("setLogin", response.data.token);
      router.push("/profile");
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  setLogin(state, token) {
    saveToken(token);
    state.error = false;
  },
  setDataLogin(state, { fieldName, newValue }) {
    state.login[fieldName] = newValue;
  },
};

export default { state, getters, actions, mutations };
