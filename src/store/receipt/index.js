import {
  getReceiptListRequest,
  updateReceiptRequest,
} from "../../helpers/api/receipt";

const state = {
  receipt: {
    id: null,
    category: null,
    ingredientAmount: [],
    receiptName: null,
    img: null,
    receiptDescription: null,
    status: null,
  },
  receiptList: {
    pagination: null,
    items: [],
  },
};
const getters = {
  getReceipt: (state) => state.receipt,
  getReceiptList: (state) => state.receiptList,
};
const actions = {
  async getReceiptList(context, { query }) {
    try {
      const receiptListData = (await getReceiptListRequest({ query })).data;
      context.commit("setReceiptData", {
        fieldName: "receiptList",
        value: receiptListData,
      });
    } catch (e) {
      return e;
    }
  },
  async changeStatusReceipt(context, { id, status }) {
    console.log(id, status);
    try {
      const receipt = (await updateReceiptRequest({ id, data: status })).data;
      context.commit("setReceiptData", {
        fieldName: "receipt",
        value: receipt,
      });
    } catch (e) {
      return e;
    }
  },
};
const mutations = {
  setReceiptData(state, { fieldName, value }) {
    state[fieldName] = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
