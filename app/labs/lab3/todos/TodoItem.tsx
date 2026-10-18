export default function TodoItem({
  todo = { title: "Untitled", status: "NEW", done: false },
}: {
  todo?: { title: string; status: string; done: boolean };
}) {
  return (
    <li className="wd-todo-item">
      <input type="checkbox" defaultChecked={todo.done} className="mr-2" />
      {todo.title} ({todo.status})
    </li>
  );
}
