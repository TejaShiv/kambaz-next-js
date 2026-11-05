"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h4>Boolean State Variables</h4>
      <p>{done ? "Done" : "Not done"}</p>
      <label htmlFor="wd-done-checkbox">Done</label>
      <input
        type="checkbox"
        id="wd-done-checkbox"
        checked={done}
        onChange={(e) => setDone(e.target.checked)}
      />
      <hr />
    </div>
  );
}
