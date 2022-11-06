import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { getThemeInLocalStorage } from "../../core/saveLocalStorage";

interface PersonName {
  userName: string;
}

const initialName: PersonName = {
  userName: getThemeInLocalStorage("userNameStore"),
};

const nameSlice = createSlice({
  name: "namePerson",
  initialState: initialName,
  reducers: {
    addNewName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { addNewName } = nameSlice.actions;

export const selectName = (state: RootState) => state.userNameStore;
export const selectNameState = (state: RootState) => selectName(state).userName;

export default nameSlice.reducer;
