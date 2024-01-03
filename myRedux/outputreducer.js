import { createSlice } from "@reduxjs/toolkit";

export const outputSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
  },
  reducers: {
    setOutputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOutputValue } = outputSlice.actions;

export default outputSlice.reducer;
