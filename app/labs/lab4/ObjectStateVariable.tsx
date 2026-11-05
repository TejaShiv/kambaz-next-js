"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    city: "Boston",
  });
  return (
    <div id="wd-object-state-variables">
      <h4>Object State Variables</h4>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <label htmlFor="wd-person-name">Name</label>
      <input
        id="wd-person-name"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <br />
      <label htmlFor="wd-person-age">Age</label>
      <input
        id="wd-person-age"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: Number(e.target.value) })
        }
      />
      <br />
      <label htmlFor="wd-person-city">City</label>
      <input
        id="wd-person-city"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      />
      <hr />
    </div>
  );
}
