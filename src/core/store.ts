import { configureStore } from "@reduxjs/toolkit";
import toggleNavSlice from "../features/Bar/sliceBar";
import nameSlice from "../features/Name/sliceName";

const store = configureStore({
  reducer: {
    toggleNav: toggleNavSlice,
    newName: nameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
