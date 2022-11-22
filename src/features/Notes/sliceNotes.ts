import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataInLocalStorage } from "../../core/saveLocalStorage";
import { RootState } from "../../core/store";

interface Notes {
  id: string;
  text: string;
  time: string;
}

const initialNotes: Array<Notes> = getDataInLocalStorage("notesStore");

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotes,
  reducers: {
    addNotes: (state, action: PayloadAction<Notes>) => {
      state.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((note) => note.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const selectNotes = (state: RootState) => state.notesSlice;

export const { addNotes, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
