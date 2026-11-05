"use client";

export default function ChildCounter({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (n: number) => void;
}) {
  return (
    <div>
      <h5>Child Counter: {counter}</h5>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>{" "}
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
