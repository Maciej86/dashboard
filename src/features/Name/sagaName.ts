import { call, takeEvery, select } from "redux-saga/effects";
import { saveDataInLocalStorage } from "../../core/saveLocalStorage";
import { fetchNewName, selectNameState } from "./sliceName";

function* fetchNewNameHendler(): any {
  const userName = yield select(selectNameState);
  const dataLocalStorage = [userName, "userNameStore"];
  yield call(saveDataInLocalStorage, dataLocalStorage);
}

export function* nameSaga() {
  yield takeEvery(fetchNewName.type, fetchNewNameHendler);
}
