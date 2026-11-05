"use client";

import { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h4>Array State Variable</h4>
      <button type="button" id="wd-add-element-click" onClick={addElement}>
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              type="button"
              id="wd-delete-element-click"
              onClick={() => deleteElement(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
