import { configureStore } from "@reduxjs/toolkit";
import testReducer from "@/lib/redux/slices/test"

export const store = configureStore({
  reducer: {
    test: testReducer
  },
});
