import { SET_PURCHASE_DETAIL, SET_USER_PURCHASES } from "../actions/types";

const INITIAL_STATE = {
  purchases: [],
  purchaseDetail: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_PURCHASES:
      return {
        ...state,
        purchases: action.payload,
      };
    case SET_PURCHASE_DETAIL:
      let purchaseDetail;
      state.purchases.map(purchase => {
        if (purchase._id == action.payload) {
          purchaseDetail = purchase;
        }
      });
      return {
        ...state,
        purchaseDetail,
        _id: -1,
        total: 0,
        orderNumber: "",
        orderDate: null,
        creditCard: "",
        user: {
          name: " ",
          shippingAddress: "",
        },
      };
    default:
      return state;
  }
}