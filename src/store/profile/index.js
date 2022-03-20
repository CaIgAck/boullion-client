import { getProfileRequest } from "../../helpers/api/profile";

const state = {
  profile: {
    _id: null,
    userName: null,
    email: null,
    avatar: null,
    role: null,
    created: null,
    category: null,
    survey: null,
  },
};
const getters = {
  getProfile: (state) => state.profile,
};
const actions = {
  async getProfileDetails(context, { query }) {
    try {
      const data = (await getProfileRequest({ query })).data;
      context.commit("setProfileDetails", data);
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  clearProfile(state) {
    state.profile = {
      _id: null,
      userName: null,
      email: null,
      avatar: null,
      role: null,
      created: null,
      category: null,
      survey: null,
    };
  },
  setProfileDetails(state, data) {
    console.log(data);
    state.profile = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
