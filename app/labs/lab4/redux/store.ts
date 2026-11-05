import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
