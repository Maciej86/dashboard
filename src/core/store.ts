import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import toggleNavSlice from "../features/Bar/sliceBar";
import nameSlice from "../features/Name/sliceName";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    toggleNavStore: toggleNavSlice,
    userNameStore: nameSlice,
  },

  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
