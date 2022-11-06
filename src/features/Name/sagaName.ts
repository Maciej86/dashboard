import { call, takeEvery, select } from "redux-saga/effects";
import { saveDataInLocalStorage } from "../../core/saveLocalStorage";
import { addNewName, selectNameState } from "./sliceName";

function* addNewNameHendler() {
  const userName: string = yield select(selectNameState);
  const dataLocalStorage: Array<string> = [userName, "userNameStore"];
  yield call(saveDataInLocalStorage, dataLocalStorage);
}

export function* nameSaga() {
  yield takeEvery(addNewName.type, addNewNameHendler);
}
