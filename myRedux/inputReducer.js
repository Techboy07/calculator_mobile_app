import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.value += action.payload;
    },
    resetInputToValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInputValue, resetInputToValue } = inputSlice.actions;

export default inputSlice.reducer;
