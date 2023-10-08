import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Your saga should listen for the action type of `GET_ZOO_ANIMALS`
export function* rootSaga() {
  yield takeEvery("GET_ZOO_ANIMALS", fetchZooAnimals);
}

function* fetchZooAnimals() {
  try {
    const response = yield axios.get("/zoo");
    yield put({ type: "SET_ZOO_ANIMALS", payload: response.data });
  } catch (error) {
    console.log("Error with getting zoo animals", error);
  }
}
