import { ACTION_TYPE } from "../constants";

export const increase = () => {
  return {
    type: ACTION_TYPE.INCREASE,
  };
};

export const decrease = () => {
  return {
    type: ACTION_TYPE.DECREASE,
  };
};

export const plus = (data) => {
  return {
    type: ACTION_TYPE.PLUS,
    data,
  };
};

export const minus = (data) => {
  return {
    type: ACTION_TYPE.MINUS,
    data,
  };
};
