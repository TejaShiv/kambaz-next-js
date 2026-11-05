"use client";

import { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState("2026-11-09");
  return (
    <div id="wd-date-state-variables">
      <h4>Date State Variables</h4>
      <p>{startDate}</p>
      <label htmlFor="wd-start-date">Start date</label>
      <input
        type="date"
        id="wd-start-date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <hr />
    </div>
  );
}
