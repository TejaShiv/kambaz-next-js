"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../todosReducer";
import type { RootState } from "../store";

export default function ReduxTodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState("");

  const save = () => {
    if (editingId) {
      dispatch(updateTodo({ id: editingId, title }));
      setEditingId("");
    } else {
      dispatch(addTodo(title));
    }
    setTitle("");
  };

  return (
    <div id="wd-redux-todo-list">
      <h4>Redux Todo List</h4>
      <input
        id="wd-redux-todo-title"
        value={title}
        placeholder="New todo"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <button type="button" onClick={save}>
        {editingId ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button
              type="button"
              onClick={() => {
                setTitle(t.title);
                setEditingId(t.id);
              }}
            >
              Edit
            </button>{" "}
            <button type="button" onClick={() => dispatch(deleteTodo(t.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
