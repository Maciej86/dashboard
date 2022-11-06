import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { getThemeInLocalStorage } from "./saveLocalStorage";

interface PersonName {
  userName: string;
}

const initialName: PersonName = {
  userName: getThemeInLocalStorage(),
};

const nameSlice = createSlice({
  name: "namePerson",
  initialState: initialName,
  reducers: {
    fetchNewName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { fetchNewName } = nameSlice.actions;

export const selectName = (state: RootState) => state.newName;
export const selectNameState = (state: RootState) => selectName(state).userName;

export default nameSlice.reducer;
