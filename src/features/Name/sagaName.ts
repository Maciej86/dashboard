import { call, takeEvery, select } from "redux-saga/effects";
import { saveDataInLocalStorage } from "./saveLocalStorage";
import { fetchNewName, selectNameState } from "./sliceName";

function* fetchNewNameHendler(): any {
  const userName = yield select(selectNameState);
  console.log(userName);
  yield call(saveDataInLocalStorage, userName);
}

export function* nameSaga() {
  yield takeEvery(fetchNewName.type, fetchNewNameHendler);
}
