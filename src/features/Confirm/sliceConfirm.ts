import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

interface ConfirmState {
  status: boolean;
  textConfirm: string;
  id: string;
}

const initialConfirm: Array<ConfirmState> = [];

const confirmSlice = createSlice({
  name: "confirm",
  initialState: { initialConfirm },
  reducers: {
    addConfirm: ({ initialConfirm }, action: PayloadAction<ConfirmState>) => {
      initialConfirm.push(action.payload);
    },
  },
});

export const selectConfirm = (state: RootState) => state.confirmStore;
export const selectConfirmState = (state: RootState) =>
  selectConfirm(state).initialConfirm;

export const { addConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
