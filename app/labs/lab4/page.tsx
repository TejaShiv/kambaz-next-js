import ReduxProvider from "./redux/ReduxProvider";
import Counter from "./Counter";
import ParentCounter from "./ParentCounter";
import ZustandCounter from "./ZustandCounter";
import ReduxCounter from "./ReduxCounter";

export default function Lab4() {
  return (
    <ReduxProvider>
      <div id="wd-lab4">
        <h2>Lab 4</h2>
        <Counter />
        <ParentCounter />
        <ZustandCounter />
        <ReduxCounter />
      </div>
    </ReduxProvider>
  );
}
