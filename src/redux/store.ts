import { configureStore } from "@reduxjs/toolkit";
import develop from "../redux/counterSlices/counterSlice";
import optimiste from "../redux/todosSlices/todosSlices";
import studentSlices from '../redux/studentSlices/studentSlices'



export const store = configureStore({
  reducer: {
    counter: develop,
    liste: optimiste,
    student: studentSlices
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
