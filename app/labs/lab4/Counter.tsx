"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter-use-state">
      <h4>Counter: {count}</h4>
      <button
        type="button"
        id="wd-counter-up-click"
        onClick={() => setCount(count + 1)}
      >
        Up
      </button>{" "}
      <button
        type="button"
        id="wd-counter-down-click"
        onClick={() => setCount(count - 1)}
      >
        Down
      </button>
      <hr />
    </div>
  );
}
