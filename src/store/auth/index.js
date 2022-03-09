import { loginRequest } from "../../helpers/api/auth";
import router from "../../router";

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
  isLogin: false,
};
const getters = {
  login: (state) => state.login,
  isLogin: (state) => !!localStorage.getItem("token") ?? !!state.isLogin,
};
const actions = {
  async login(context) {
    try {
      const login = context.getters.login;
      const response = await loginRequest({ data: login });
      await router.push("/profile");
      context.commit("setLogin", response.data.token);
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  setLogin(state, token) {
    localStorage.setItem("token", token);
    state.isLogin = true;
    state.error = false;
  },
  setDataLogin(state, { fieldName, newValue }) {
    state.login[fieldName] = newValue;
  },
};

export default { state, getters, actions, mutations };
