"use client";

import { useState } from "react";
import ChildCounter from "./ChildCounter";

export default function ParentCounter() {
  const [counter, setCounter] = useState(123);
  return (
    <div id="wd-parent-counter">
      <h4>Parent Counter: {counter}</h4>
      <ChildCounter counter={counter} setCounter={setCounter} />
      <hr />
    </div>
  );
}
