"use client";

import useCounterStore from "./store/counterStore";

export default function ZustandCounter() {
  const { count, up, down } = useCounterStore();
  return (
    <div id="wd-zustand-counter">
      <h4>Zustand Counter: {count}</h4>
      <button type="button" onClick={up}>Up</button>{" "}
      <button type="button" onClick={down}>Down</button>
      <hr />
    </div>
  );
}
