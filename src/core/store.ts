import { configureStore } from "@reduxjs/toolkit";
import toggleNavSlice from "../features/Bar/sliceBar";

const store = configureStore({
  reducer: {
    toggleNav: toggleNavSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
