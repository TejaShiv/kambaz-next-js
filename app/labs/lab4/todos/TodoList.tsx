"use client";

import useTodosStore from "../store/todosStore";

export default function TodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } =
    useTodosStore();

  return (
    <div id="wd-zustand-todo-list">
      <h4>Zustand Todo List</h4>
      <input
        id="wd-zustand-todo-title"
        value={todo.title}
        placeholder="New todo"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />{" "}
      <button type="button" onClick={() => addTodo(todo.title)}>
        Add
      </button>{" "}
      <button type="button" onClick={() => updateTodo(todo)}>
        Update
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button type="button" onClick={() => setTodo(t)}>
              Edit
            </button>{" "}
            <button type="button" onClick={() => deleteTodo(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
