import { ACTION_TYPE } from "../constants";

const initialData = null;

export const apiCallReducer = (data = initialData, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_API_DATA:
      return action.data;
    default:
      return data;
  }
};
