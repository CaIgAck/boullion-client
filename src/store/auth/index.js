import { loginRequest, registrationRequest } from "../../helpers/api/auth";
import { getToken, removeToken, saveToken } from "../../helpers/jwtHelper";
import { createSurveyRequest } from "../../helpers/api/survey";
import axios from "axios";

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
    role: "user",
    category: "62763e2ad8758bb630cec048",
    survey: null,
  },
  error: null,
};
const getters = {
  login: (state) => state.login,
  register: (state) => state.register,
  isLogin: (state) => {
    if (state.token) return state.token;
  },
};
const actions = {
  async register(context) {
    const { survey } = context.getters.register;
    const surveyForm = {
      surveyName: survey,
    };
    let registrationForm = context.getters.register;
    const { _id } = (await createSurveyRequest({ data: surveyForm })).data;
    registrationForm.survey = _id;
    await registrationRequest({ data: registrationForm });
  },
  async login(context) {
    try {
      const login = context.getters.login;
      const response = await loginRequest({ data: login });
      context.commit("setLogin", { token: response.data.token });
      setTimeout(() => {
        context.commit("logout");
      }, 3600000);
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
    axios.defaults.headers["x-access-token"] = token.token;
  },
  setDataLogin(state, { fieldName, newValue }) {
    state.login[fieldName] = newValue;
  },
  setDataRegister(state, { fieldName, newValue }) {
    state.register[fieldName] = newValue;
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
