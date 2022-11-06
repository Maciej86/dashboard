import { all } from "redux-saga/effects";
import { nameSaga } from "../features/Name/sagaName";

function* rootSaga() {
  yield all([nameSaga()]);
}

export default rootSaga;
