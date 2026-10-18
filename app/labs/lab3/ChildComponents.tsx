import Add from "./Add";

export default function ChildComponents() {
  return (
    <div id="wd-child-components">
      <h4>Child Components</h4>
      <Add a={3} b={4} />
      <Add a={10} b={20} />
      <hr />
    </div>
  );
}
