import ReduxProvider from "./redux/ReduxProvider";
import Counter from "./Counter";
import ParentCounter from "./ParentCounter";
import ZustandCounter from "./ZustandCounter";
import ReduxCounter from "./ReduxCounter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";

export default function Lab4() {
  return (
    <ReduxProvider>
      <div id="wd-lab4">
        <h2>Lab 4</h2>
        <Counter />
        <ParentCounter />
        <ZustandCounter />
        <ReduxCounter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
      </div>
    </ReduxProvider>
  );
}
