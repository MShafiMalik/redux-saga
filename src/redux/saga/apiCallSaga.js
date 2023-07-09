import { ACTION_TYPE } from "../constants";
import { takeEvery, put } from "redux-saga/effects";

function* getData() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");

  data = yield data.json();

  yield put({ type: ACTION_TYPE.SET_API_DATA, data });
}

function* apiCallSaga() {
  yield takeEvery(ACTION_TYPE.API_CALL, getData);
}

export default apiCallSaga;
