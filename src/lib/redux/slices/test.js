import { createSlice } from "@reduxjs/toolkit";

const initialState = { test: 0 };

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state) => {
      state.test = 1;
    },
  },
});

export const { setTest } = testSlice.actions;
export default testSlice.reducer;