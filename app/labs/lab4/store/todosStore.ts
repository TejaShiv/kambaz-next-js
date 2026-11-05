import { create } from "zustand";

export type Todo = { id: string; title: string };

type TodosState = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
};

const useTodosStore = create<TodosState>((set) => ({
  todos: [
    { id: "1", title: "Learn Zustand" },
    { id: "2", title: "Build Lab 4" },
    { id: "3", title: "Finish A4" },
  ],
  todo: { id: "-1", title: "" },
  setTodo: (todo) => set({ todo }),
  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: new Date().getTime().toString(), title },
      ],
      todo: { id: "-1", title: "" },
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
      todo: { id: "-1", title: "" },
    })),
}));

export default useTodosStore;
