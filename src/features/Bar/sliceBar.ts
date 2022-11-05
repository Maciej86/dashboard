import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

interface ToggleState {
  toggle: boolean;
}

const initialToggle: ToggleState = {
  toggle: false,
};

const toggleNavSlice = createSlice({
  name: "toggleNav",
  initialState: initialToggle,
  reducers: {
    setToggleNav: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const selectToggleNav = (state: RootState) => state.toggleNav;
export const selectToggleNavState = (state: RootState) =>
  selectToggleNav(state).toggle;

export const { setToggleNav } = toggleNavSlice.actions;

export default toggleNavSlice.reducer;
