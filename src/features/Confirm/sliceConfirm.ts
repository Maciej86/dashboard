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
    removeConfirm: ({ initialConfirm }, { payload: statusId }) => {
      const index = initialConfirm.findIndex(
        (status) => status.id === statusId
      );
      initialConfirm.splice(index, 1);
    },
    removeAutoConfirm: ({ initialConfirm }) => {
      initialConfirm.splice(0, 1);
    },
  },
});

export const selectConfirm = (state: RootState) => state.confirmStore;
export const selectConfirmState = (state: RootState) =>
  selectConfirm(state).initialConfirm;

export const { addConfirm, removeConfirm, removeAutoConfirm } =
  confirmSlice.actions;

export default confirmSlice.reducer;
