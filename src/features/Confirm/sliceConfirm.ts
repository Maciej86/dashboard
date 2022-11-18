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
  initialState: initialConfirm,
  reducers: {
    addConfirm: (state, action: PayloadAction<ConfirmState>) => {
      state.push(action.payload);
    },
    removeConfirm: (state, { payload: statusId }) => {
      const index = initialConfirm.findIndex(
        (status) => status.id === statusId
      );
      state.splice(index, 1);
    },
    removeAutoConfirm: (state) => {
      state.splice(0, 1);
    },
  },
});

export const selectConfirm = (state: RootState) => state.confirmStore;

export const { addConfirm, removeConfirm, removeAutoConfirm } =
  confirmSlice.actions;

export default confirmSlice.reducer;
