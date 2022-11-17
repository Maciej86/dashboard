import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

interface ConfirmState {
  status: boolean;
  textConfirm: string;
  id: string;
}

const initialConfirm: ConfirmState = {
  status: false,
  textConfirm: "",
  id: "",
};

const confirmSlice = createSlice({
  name: "confirm",
  initialState: initialConfirm,
  reducers: {
    addConfirm: (state, action: PayloadAction<ConfirmState>) => {
      state.status = action.payload.status;
      state.textConfirm = action.payload.textConfirm;
      state.id = action.payload.id;
    },
  },
});

export const selectConfirm = (state: RootState) => state.confirmStore;

export const { addConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
