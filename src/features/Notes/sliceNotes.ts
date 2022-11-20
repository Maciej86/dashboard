import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notes {
  id: string;
  text: string;
  date: string;
}

const initialNotes: Array<Notes> = [];

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotes,
  reducers: {
    addNotes: (state, action: PayloadAction<Notes>) => {
      state.push(action.payload);
    },
  },
});

export const { addNotes } = notesSlice.actions;

export default notesSlice.reducer;
