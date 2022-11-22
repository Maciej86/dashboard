import { all } from "redux-saga/effects";
import { nameSaga } from "../features/Name/sagaName";
import { notesSaga } from "../features/Notes/sagaNotes";

function* rootSaga() {
  yield all([nameSaga(), notesSaga()]);
}

export default rootSaga;
