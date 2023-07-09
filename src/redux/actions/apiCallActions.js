import { ACTION_TYPE } from "../constants";

export const apiCall = () => {
  // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // data = await data.json();

  // console.log("data ----> ", data);

  return { type: ACTION_TYPE.API_CALL };
};
