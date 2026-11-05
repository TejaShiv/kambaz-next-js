"use client";

import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div id="wd-string-state-variables">
      <h4>String State Variables</h4>
      <p>{firstName}</p>
      <label htmlFor="wd-first-name">First name</label>
      <input
        id="wd-first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}
