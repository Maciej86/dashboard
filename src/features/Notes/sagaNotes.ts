import { call, takeEvery, select } from "redux-saga/effects";
import { saveDataInLocalStorage } from "../../core/saveLocalStorage";
import { addNotes, selectNotes } from "./sliceNotes";

function* saveNotesHendler() {
  const notes: string = yield select(selectNotes);
  yield call(saveDataInLocalStorage, notes, "notesStore");
}

export function* notesSaga() {
  yield takeEvery("*", saveNotesHendler);
}
