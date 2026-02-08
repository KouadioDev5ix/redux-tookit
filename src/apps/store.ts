import { configureStore } from "@reduxjs/toolkit";
import develop from "../features/counterSlices/counterSlice";
import optimiste from "../features/todosSlices/todosSlices";

export const store = configureStore({
  reducer: {
    counter: develop,
    liste: optimiste,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
