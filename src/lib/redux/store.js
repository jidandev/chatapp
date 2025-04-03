import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import testReducer from "@/lib/redux/slices/test"

const persistConfig = { 
  key: "root", 
  storage,
  whitelist: ["test"],
};

const persistedReducer = persistReducer(persistConfig, 
  {
    test: testReducer
  }
);

export const store = configureStore({
  reducer: {
    test: persistedReducer.test
  },
});

export const persistor = persistStore(store);