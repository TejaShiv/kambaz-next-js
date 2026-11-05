import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "Buy milk" },
    { id: "2", title: "Feed the pets" },
    { id: "3", title: "Walk the dog" },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: new Date().getTime().toString(),
        title: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...t, title: action.payload.title }
          : t
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
