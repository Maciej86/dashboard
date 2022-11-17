import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import toggleNavSlice from "../features/Bar/sliceBar";
import nameSlice from "../features/Name/sliceName";
import confirmSlice from "../features/Confirm/sliceConfirm";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    toggleNavStore: toggleNavSlice,
    userNameStore: nameSlice,
    confirmStore: confirmSlice,
  },

  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
