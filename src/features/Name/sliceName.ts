import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonName {
  userName: string;
}

const initialName: PersonName = {
  userName: "",
};

const nameSlice = createSlice({
  name: "namePerson",
  initialState: initialName,
  reducers: {
    setNewName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setNewName } = nameSlice.actions;

export default nameSlice.reducer;
