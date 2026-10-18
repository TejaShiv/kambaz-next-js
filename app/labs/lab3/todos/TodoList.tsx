import TodoItem from "./TodoItem";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div id="wd-todo-list">
      <h4>Todo List</h4>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
