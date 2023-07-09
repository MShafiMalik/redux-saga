import { ACTION_TYPE } from "../constants";

export const counterReducer = (data = 0, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREASE:
      return data + 1;
    case ACTION_TYPE.DECREASE:
      return data - 1;
    case ACTION_TYPE.PLUS:
      return data + parseInt(action.data);
    case ACTION_TYPE.MINUS:
      return data - action.data;
    default:
      return data;
  }
};
