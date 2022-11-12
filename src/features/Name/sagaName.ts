import { call, takeEvery, select } from "redux-saga/effects";
import { saveDataInLocalStorage } from "../../core/saveLocalStorage";
import { addNewName, selectNameState } from "./sliceName";

function* addNewNameHendler() {
  const userName: string = yield select(selectNameState);
  yield call(saveDataInLocalStorage, userName, "userNameStore");
}

export function* nameSaga() {
  yield takeEvery(addNewName.type, addNewNameHendler);
}
