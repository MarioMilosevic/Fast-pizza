import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
// import counterReducer from "../features/counter/counterSlice";
// import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    user:userReducer
    // counter: counterReducer,
    // todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
